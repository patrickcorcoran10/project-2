// create table userData(
//   id int NOT NULL AUTO_INCREMENT,

//   restaurant_id varchar(80) NOT NULL,
// restaurant_name varchar(60) NOT NULL,
// restarant_cost varchar(30) NOT NULL,
// restaurant_type varchar(150) NOT NULL,
// restaurant_image varchar(250) NOT NULL,
//   foreign key(user_id) REFERENCES users(id)
// );

module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    restaurant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    restaurant_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    restaurant_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    restaurant_image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
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