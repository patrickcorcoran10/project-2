module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      
    },
    type: {
      type: DataTypes.STRING,
      
    },
    // location: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    phone: {
      type: DataTypes.STRING,
      
    }
  });

  // UserData.associate = function (models) {
  //   // This means that UseData belongs to User
  //   UserData.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return UserData;
};