import { CRUD } from '../../../src/controllers/API'
import DB from '../../../src/helpers/db'

const ToolModel = DB().models.tools

const idReq = 5
const requestBody = {
  id: idReq,
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
}



describe('Controllers: Tools', () => {

    describe('Create a tool: store()', () => {
      it('sucess on create a tool', () => {
        const Tools = {
          create: td.function(),
        }

        td.when(Tools.create(requestBody)).thenResolve(requestBody)

        return CRUD.store(ToolModel, requestBody)
          .then(response => {
            expect(JSON.stringify(response)).to.be.eql(JSON.stringify(requestBody))
          })
      })
    })

    describe('Get all tools: index()', () => {
      it('sucess on return a list of books', async () => {
        const Tools = {
          findAll: td.function(),
        }

        const expectedResponseAll = await ToolModel.findAll({})

        td.when(Tools.findAll({})).thenResolve(expectedResponseAll)

        return CRUD.index(ToolModel) 
          .then(response =>expect(JSON.stringify(response)).to.be.eql(JSON.stringify(expectedResponseAll)))
      })
    })

    describe('Get one tool: query()', () => {
      it('sucess on return one tool', () => {
        const Tools = {
          findAll: td.function(),
        }

        const tags = { tags : { [ DB().Sequelize.Op.contains ] : ['calendar'] }}

        td.when(Tools.findAll({ where: { tags } })).thenResolve([requestBody])

        return CRUD.query(ToolModel, tags)
          .then(response => expect(JSON.stringify(response)).to.be.eql(JSON.stringify([requestBody])))
      })
    })

    const expectedResponseBool = 1

    describe('Delete a tool: delete()', () => {
      it('sucess on delete an existing tool', () => {
        const Tools = {
          destroy: td.function(),
        }
        
        td.when(Tools.destroy({ where: { id: idReq } })).thenResolve(expectedResponseBool)

        return CRUD.delete(ToolModel, idReq )
          .then(response => expect(response).to.be.eql(expectedResponseBool))
      })
    })
})