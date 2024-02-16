module.exports = (sequelize, DataTypes) => { 
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        // nom de la table en base de données
        tableName: 'users',
        //Garder la nomination de la table sans la modifier
        freezeTableName: true,
        // Utiliser la colonne createdAt et updatedAt
        timestamps: true
    });
    return User;
}