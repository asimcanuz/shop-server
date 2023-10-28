"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, {
        foreignKey: "category_id",
      });
    }
  }
  product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      unit_price: DataTypes.DOUBLE,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "product",
      modelName: "product",
    }
  );
  return product;
};
