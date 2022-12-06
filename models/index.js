// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
 Product.belongsTo(Category, {
  foreignKey: 'category_id'
  });
// Categories have many Products
 Category.hasMany(Product, {
  foreighKey: 'product_id',
  onDelete: 'CASCADE',
 })
// Products belongToMany Tags (through ProductTag)
 Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    Unique: false
  }
 })
// Tags belongToMany Products (through ProductTag)
 Tag.belongsToManu(Product, {
  through:{
    model: ProductTag,
    Unique: false
  }
 })
module.exports = { Product, Category, Tag, ProductTag};

