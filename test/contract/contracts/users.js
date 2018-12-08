import jwt from 'jwt-simple'
import { jwtSecret } from '../../../config/config'
import DB from '../../../src/helpers/db'

const UsersModel = DB().models.users

describe('Routes: Users', () => {

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

  const userDefault = {
    "id": 2,
    "name": "user",
    "email": "email@email.com",
    "password": "q1w2e3"
  }

  const modelUser = {
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  }


  describe('POST /users', () => {
    it('sucess on validate a new tool schema', done => {
      request
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send(userDefault)
      .end((err, res) => {
        joiAssert(res.body,  Joi.object().keys(modelUser) )
        done(err)
      })
    })
  })

  describe('GET /users', () => {
    it('sucess on validate a list of users', done => {
      request
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        joiAssert(res.body, Joi.array().items(Joi.object().keys(modelUser)))
        done(err)
      })
    })
  })

  describe('GET /users/{id}', () => {
    it('sucess on validate a single user schema', done => {
      request
      .get(`/users/1`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        joiAssert(res.body, Joi.object().keys(modelUser))
        done(err)
      })
    })
  })

  describe('DELETE /users/{id}', () => {
    it('sucess on validate a deleted user', done => {
      request
      .delete(`/users/2`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.statusCode).to.eql(200)
        done(err)
      })
    })
  })
})
