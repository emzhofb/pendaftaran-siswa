'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pendaftaran = sequelize.define('Pendaftaran', {
    jurusan: DataTypes.STRING,
    kode: DataTypes.INTEGER
  }, {});
  Pendaftaran.associate = function(models) {
    // associations can be defined here
    Pendaftaran.hasMany(sequelize.models.Siswa)
  };
  return Pendaftaran;
};