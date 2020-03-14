module.exports = function(sequelize, DataTypes) {
  var Donee = sequelize.define("Donee", {
    name: DataTypes.STRING,
    charityName: DataTypes.STRING,
    charityAddress: DataTypes.STRING
  });
  return Donee;
};
