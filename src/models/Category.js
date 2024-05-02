module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        modelName: 'Category',
        tableName: 'categories',
    });
    Category.associate = (models) => {
        Category.belongsToMany(models.Article, {
            foreignKey: 'categoryId',
            as: 'articles',
            through: 'categoriesArticles',
        });
    };
    return Category;
};