import Sequelize from 'sequelize'
import autoLoadModel from './auto-load-model'
import config from '../../config/config'

let db = null

module.exports = () => {
  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    db = {
      sequelize,
      Sequelize,
      models: {}
    }
    db.models = autoLoadModel(sequelize)
    // Apenas para desenvolvimento
   sequelize.sync().done(() => db)
  }
  
  return db
}
