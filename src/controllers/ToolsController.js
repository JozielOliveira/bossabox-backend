import { CRUD, resposta } from './API'
import DB from '../helpers/db'

const ToolModel = DB().models.tools

export const ToolsController = {

    index : (req, res) => {
        if(req.query.tag)
            resposta(res, CRUD.query, ToolModel, { 
                tags : {  
                    [DB().Sequelize.Op.contains ] : [`${req.query.tag}`]
                } 
            })
        else
            resposta(res, CRUD.index, ToolModel)
    },

    store : (req, res) => resposta( res, CRUD.store, ToolModel, req.body ),

    delete : (req, res) => resposta( res, CRUD.delete, ToolModel, req.params.id ),

}