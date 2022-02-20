'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Contact.belongsToMany(models.Contact, {
        foreignKey: 'parentId',
        otherKey: 'contactId',
        as: 'history',
        through: 'ContactHistory',
        timestamps: false,
      });
      models.Contact.belongsToMany(models.Contact, {
        foreignKey: 'contactId',
        otherKey: 'parentId',
        as: 'parentContact',
        through: 'ContactHistory',
        timestamps: false,
      });
      
    }
  }
  Contact.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isOldContact: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};