'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'content');
    await queryInterface.addColumn('Posts', 'content', {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'content', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
    await queryInterface.removeColumn('Posts', 'content');
  },
};
