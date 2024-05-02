module.exports = (sequelize, DataTypes) => {
    // Définition du modèle Article
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
    });
    Category.associate = (models) => {
        Category.belongsToMany(models.Article, {
            through: 'categoriesArticles',
            as: 'articles',
            foreignKey: 'categoryId'
        });
    };
    return Category;
};