module.exports = function (sequelize, DataTypes) {
  // Sequelize object to be filled and sent through the routes.
  
  var UserData = sequelize.define("UserData", {
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    
    phone: {
      type: DataTypes.STRING,
    }
  });

  return UserData;
};