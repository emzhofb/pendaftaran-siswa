'use strict';

module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define('Siswa', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pendaftaranId: DataTypes.INTEGER
  }, {});
  Siswa.associate = function(models) {
    // associations can be defined here
    Siswa.belongsTo(sequelize.models.Pendaftaran)
  };
  return Siswa;
};