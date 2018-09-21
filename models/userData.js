

module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  UserData.associate = function (models) {
    // This means that UseData belongs to User
    UserData.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserData;
}