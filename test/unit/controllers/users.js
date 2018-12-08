import { CRUD } from '../../../src/controllers/API'
import DB from '../../../src/helpers/db'

const UserModel = DB().models.users

const idReq = 2
const requestBody = {
    "id": idReq,
    "name": "user",
    "email": "email@email.com",
    "password": "q1w2e3"

}

describe('Controllers: Users', () => {

    describe('Create a users: store()', () => {
      it('sucess on create a user', () => {
        const Users = {
          create: td.function(),
        }

        td.when(Users.create(requestBody)).thenResolve(requestBody)

        return CRUD.store(UserModel, requestBody)
          .then(response => {
            expect(response.name).to.be.eql(requestBody.name)
          })
      })
    })

    describe('Get all users: index()', () => {
      it('sucess on return a list of users', async () => {
        const Users = {
          findAll: td.function(),
        }

        const expectedResponseAll = await UserModel.findAll({})

        td.when(Users.findAll({})).thenResolve(expectedResponseAll)

        return CRUD.index(UserModel) 
          .then(response =>expect(JSON.stringify(response)).to.be.eql(JSON.stringify(expectedResponseAll)))
      })
    })
    
    describe('Get one users: show()', () => {
      it('sucess on return one user', () => {
        const Users = {
          findOne: td.function(),
        }

        td.when(Users.findOne({ where: { id: idReq } })).thenResolve(requestBody)

        return CRUD.show(UserModel, idReq)
          .then(response => expect(response.name).to.be.eql(requestBody.name))
      })
    })

    const expectedResponseBool = 1

    describe('Delete a users: delete()', () => {
      it('sucess on delete an existing user', () => {
        const Users = {
          destroy: td.function(),
        }
        
        td.when(Users.destroy({ where: { id: idReq } })).thenResolve(expectedResponseBool)

        return CRUD.delete(UserModel, idReq )
          .then(response => expect(response).to.be.eql(expectedResponseBool))
      })
    })
})