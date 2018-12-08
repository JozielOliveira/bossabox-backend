import jwt from 'jwt-simple'
import { jwtSecret } from '../../../config/config'
import DB from '../../../src/helpers/db'

const UsersModel = DB().models.users

describe('Routes: Tools', () => {
  let token;

  beforeEach(done => {
    UsersModel.destroy({ where: {} })
    .then(() => UsersModel.create({
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        password: '12345',
    }))
    .then(user => {
        token = jwt.encode({ id: user.id }, jwtSecret);
        done();
    });
  });
  const defaultool = {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar"
    ]
  };

  const modeltool = {
    id: Joi.number(),
    title: Joi.string(),
    link: Joi.string(),
    description: Joi.string(),
    tags: Joi.array()
  }

  describe('POST /tools', () => {
    it('sucess validate a new tool', done => {
      request
      .post('/tools')
      .set('Authorization', `Bearer ${token}`)
      .send(defaultool)
      .end((err, res) => {
        joiAssert(res.body, Joi.object().keys(modeltool));
        done(err);
      });
    });
  });

  describe('GET /tools', () => {
    it('sucess validate a list of tools', done => {
      request
      .get('/tools')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        joiAssert(res.body, Joi.array().items(Joi.object().keys(modeltool)));
        done(err);
      });
    });
  });

  describe('GET /tools?{tag}', () => {
    it('sucess validate a list of tools filtered', done => {
      request
      .get('/tools?tag=calendar')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        joiAssert(res.body,  Joi.array().items(Joi.object().keys(modeltool)));
        done(err);
      });
    });
  });

  describe('DELETE /tools/{id}', () => {
    it('sucess validate a deleted tool', done => {
      request
      .delete('/tools/1')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.statusCode).to.eql(200);
        done(err);
      });
    });
  });
});
