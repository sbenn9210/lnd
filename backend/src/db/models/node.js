"use strict";
const { Model } = require("sequelize");
const { v4: uuid } = require("uuid");
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
      cert: DataTypes.TEXT,
      macaroon: DataTypes.TEXT,
      pubkey: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Node",
      tableName: "node",
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
