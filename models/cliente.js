'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    Nombre: DataTypes.STRING,
    Apellidos: DataTypes.STRING,
    RFC: DataTypes.STRING,
    Dirección: DataTypes.STRING,
    ZipCode: DataTypes.STRING,
    MontoTotal: DataTypes.FLOAT,
    Fecha: DataTypes.DATE,
    idFactura: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};