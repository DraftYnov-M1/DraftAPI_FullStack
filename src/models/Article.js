module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE,
    }, {
        timestamps: false
    });
    return Article;
};