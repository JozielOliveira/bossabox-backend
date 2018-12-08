import DB from '../helpers/db'
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtSecret, jwtSession } from '../../config/config';

const UserModel = DB().models.users

export default () => {

  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = jwtSecret;
  opts.jwtSession = jwtSession

  const strategy = new Strategy(opts, (payload, done) => {
    UserModel.findOne({ where : { id : payload.id } })
    .then(user => {
      if (user) {
        return done(null, {
          id: user.id,
          email: user.email,
        });
      }
      return done(null, false);
    })
    .catch(error => done(error, null));
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt',  jwtSession),
  };
};
