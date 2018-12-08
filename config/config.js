module.exports = {
    username: process.env.USERNAME,
    database:process.env.DATABASE,
    password:process.env.PASSWORD, 
    params:{
      host: process.env.HOST_DATABASE,
      dialect: 'postgres',
      logging: false,
      operatorsAliases: false
    },
    jwtSecret: process.env.JWT_SECRET,
    jwtSession: {session: false},
}