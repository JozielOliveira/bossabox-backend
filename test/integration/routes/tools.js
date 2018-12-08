import jwt from 'jwt-simple'
import { jwtSecret } from '../../../config/config'
import DB from '../../../src/helpers/db'

const UsersModel = DB().models.users
const ToolModel = DB().models.tools

const defaulttool = {
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

  describe('POST /tools', () => {
    it('sucess on post a tool', done => {
      request
      .post('/tools')
      .set('Authorization', `Bearer ${token}`)
      .send(defaulttool)
      .end((err, res) => {
        expect(res.body).to.eql(defaulttool);
        done(err);
      });
    });
  });

  describe('GET /tools',  () => {
    it('sucess on return a list of tools', done => {

     ToolModel.findAll({})
        .then( defaulttools => {
            request
            .get('/tools')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
              expect(JSON.stringify(res.body)).to.eql(JSON.stringify(defaulttools));
              done(err);
            });
        })
    });
  });

  describe('GET  /tools?{tag}', () => {
    it('sucess on return a tool contains tag', done => {
      request
      .get('/tools?tag=calendar')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(JSON.stringify(res.body)).to.eql(JSON.stringify([defaulttool]));
        done(err);
      });
    });
  });

  describe('DELETE /tools/{id}', () => {
    it('sucess on delete a tool', done => {
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
