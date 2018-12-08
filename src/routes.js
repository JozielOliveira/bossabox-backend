import { Router } from 'express'

import { ToolsController, UsersController, AuthController } from './controllers'
import Auth from './middlewares/auth'

const route = Router()

// Authentication
route.post('/auth', AuthController.validate)
// Use authentication in routes
route.use(Auth().authenticate())

route.get('/users', UsersController.index)
route.get('/users/:id', UsersController.show)
route.post('/users', UsersController.store)
route.delete('/users/:id', UsersController.delete)

route.get('/tools', ToolsController.index)
route.post('/tools', ToolsController.store)
route.delete('/tools/:id', ToolsController.delete)

module.exports = route