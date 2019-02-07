'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Siswas','pendaftaranId',Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Siswas','pendaftaranId');
  }
};
