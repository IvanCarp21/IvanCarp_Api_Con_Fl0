'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comanda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comanda.init({
    fecha: DataTypes.DATE,
    idMesero: DataTypes.INTEGER,
    mesa: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Comanda',
  });
  return Comanda;
};