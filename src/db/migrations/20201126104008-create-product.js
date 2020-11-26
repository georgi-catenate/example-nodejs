'use strict'

module.exports = {
    //function to run when (trying) to create the table (or make needed changes to it)
    up: function (queryInterface, Sequelize) {
        return Promise.all([queryInterface.createTable('products', {
            id: {
                allowNull: false,
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            }
        })]);
    },
    //function to run when reverting the changes to the table
    down: function (queryInterface, Sequelize) {
        return Promise.all([queryInterface.dropTable('products')]);
    }
};
