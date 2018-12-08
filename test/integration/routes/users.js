import jwt from 'jwt-simple'
import { jwtSecret } from '../../../config/config'
import DB from '../../../src/helpers/db'

const UsersModel = DB().models.users

const userDefault = {
    "id": 2,
    "name": "user",
    "email": "email@email.com",
    "password": "q1w2e3"
}

const userLogin = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    password: '12345',
}

describe('Routes: Users', () => {

  let token;

  beforeEach(done => {
    UsersModel.destroy({ where: {} })
    .then(() => UsersModel.create(userLogin))
    .then(user => {
        token = jwt.encode({ id: user.id }, jwtSecret);
        done();
    });
  });

  describe('POST /users', () => {
    it('sucess on post a user', done => {
      request
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send(userDefault)
      .end((err, res) => {
        expect(res.body.name).to.eql(userDefault.name);
        expect(res.body.id).to.eql(userDefault.id);
        done(err);
      });
    });
  });

  describe('GET /users',  () => {
    it('sucess on return a list of books', done => {

      UsersModel.findAll({})
      .then( defaultUsers => {
          request
          .get('/users')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(JSON.stringify(res.body)).to.eql(JSON.stringify(defaultUsers));
            done(err);
          });
      })
    });
  });

  describe('GET /users/{id}', () => {
    it('sucess on return a user by id', done => {
      request
      .get('/users/1')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body.name).to.eql(userLogin.name);
        expect(res.body.id).to.eql(userLogin.id);
        done(err);
      });
    });
  });

  describe('DELETE /users/{id}', () => {
    it('sucess on delete a user', done => {
      request
      .delete('/users/1')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.statusCode).to.eql(200);
        done(err);
      });
    });
  });
});
