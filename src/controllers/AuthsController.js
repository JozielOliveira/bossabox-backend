import { jwtSecret } from '../../config/config';
import DB from '../helpers/db'
import jwt from 'jwt-simple';

const UserModel = DB().models.users

export const AuthController = {

    validate : (req, res) => {
        if (req.body.email && req.body.password)
            UserModel.findOne({ where : { email : req.body.email } })
            .then(user => {
              if (UserModel.isPassword(user.password, req.body.password))
                res.json({  token: jwt.encode({ id: user.id }, jwtSecret) })
              else 
                res.status(401).json({})
              
            })
            .catch(() => res.status(401).json({}) )
          else
            res.status(401).json({})
    }

}