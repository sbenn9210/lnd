"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Node extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Node.init(
    {
      token: DataTypes.STRING,
      host: DataTypes.STRING,
      cert: DataTypes.STRING,
      macaroon: DataTypes.STRING,
      pubkey: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Node",
      tableName: "user",
      paranoid: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Node.beforeCreate((node, _) => {
    return (node.id = uuid());
  });
  return Node;
};
