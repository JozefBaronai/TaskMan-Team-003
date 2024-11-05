//schema for project
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Project = sequelize.define(
  "Project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Project",
  }
);

module.exports = Project;
