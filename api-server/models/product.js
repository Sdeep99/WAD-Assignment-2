module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  
    return Product;
  };