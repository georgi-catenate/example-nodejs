module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, { timestamps: true });

    User.associate = (models) => {
        User.belongsToMany(models.product, {
            through: 'user_product',
        });
    };
    return User;
};
