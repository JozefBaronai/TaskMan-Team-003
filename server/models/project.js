//co sa tyka db, jak chceme ukladat membrov k projektom? (na nete pisu ze sa to neodporuca)
//Mozeme davat listy ako hodnoty do SQL? Ak nie ako chceme riesit memberov pre projekt?
//Urobime tabulku ktora bude mat referenciu(id) usera a referenciu(id) na projekt?
//kniznica sequelize? alb const sql = require('mssql');

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
