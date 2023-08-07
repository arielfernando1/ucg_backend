'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidate.init({
    name: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    party: DataTypes.STRING,
    list: DataTypes.STRING,
    proposals: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};