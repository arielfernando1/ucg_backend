"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CandidateVotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidateVotes.init(
    {
      candidateId: DataTypes.INTEGER,
      votantId: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "CandidateVotes",
    }
  );

  // create  a new vote

  return CandidateVotes;
};
