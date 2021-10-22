"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("node", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      token: {
        type: Sequelize.STRING,
      },
      host: {
        type: Sequelize.STRING,
      },
      cert: {
        type: Sequelize.TEXT,
      },
      macaroon: {
        type: Sequelize.TEXT,
      },
      pubkey: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("node");
  },
};
