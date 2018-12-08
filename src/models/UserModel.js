import bcrypt from 'bcrypt';

export default (sequelize, DataType) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },

        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },
        
        password: {
            type: DataType.STRING,
            set(value) {
                this.setDataValue('password', Users.encode(value))
            },
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },

        },{
            createdAt: false,
            updatedAt: false
    });
    Users.encode = password => bcrypt.hashSync(password, bcrypt.genSaltSync() )
    Users.isPassword = (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword)
    return Users;
};
