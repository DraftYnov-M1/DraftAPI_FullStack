module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname : DataTypes.STRING,
        lastname: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        isadmin: DataTypes.BOOLEAN,
        datebirth: DataTypes.STRING,
        city: DataTypes.STRING,
        address: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        phone: DataTypes.STRING,
    }, {
        timestamps: false,
        modelName: 'User', // specify the singular model name
        tableName: 'users',
    });
    return User;
};