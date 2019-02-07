'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Siswas', [{
        nama: 'Luffy',
        alamat: 'East Blue',
        pendaftaranId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Siswas', null, {});
  }
};
