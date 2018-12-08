import { CRUD, resposta } from './API'
import DB from '../helpers/db'

const UserModel = DB().models.users

export const UsersController = {

    index : (req, res) => resposta(res, CRUD.index, UserModel),

    show : (req, res) => resposta(res, CRUD.show, UserModel, req.params.id),

    store : (req, res) =>  resposta( res,  CRUD.store, UserModel, req.body ),

    delete : (req, res) => resposta( res, CRUD.delete, UserModel, req.params.id ),

}