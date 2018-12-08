export default (sequelize, DataType) => {
    const Tools = sequelize.define('tools', {
        title: {
            type: DataType.TEXT(),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        link: {
            type: DataType.TEXT(),
        },

        description: {
            type: DataType.TEXT(),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        tags: {
            type: DataType.ARRAY(DataType.TEXT()),
        }

    },{
        createdAt: false,
        updatedAt: false
    })

    return Tools
    
}