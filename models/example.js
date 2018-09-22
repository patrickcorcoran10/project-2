// //////////////////////////////
// Non-functioning Code/////////
// //////////////////////////////


module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("login", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Login;
};
