const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const UserLoginTime = sequelize.define("userlogintime", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  loginToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logouttime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = UserLoginTime;
