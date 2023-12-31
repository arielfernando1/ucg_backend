"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Candidate.belongsTo(models.Party, { foreignKey: "party_id" });
    }
  }
  Candidate.init(
    {
      name: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      proposals: DataTypes.TEXT,
      party_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );
  return Candidate;
};
