module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    });

    Product.associate = (models) => {
        Product.belongsToMany(models.user, {
            through: 'user_product',
        });
    };

    return Product;
};
