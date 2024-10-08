import { Model, DataTypes } from 'sequelize';
import sequelize from '../db'; 
import user from './user';


const Photo = sequelize.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  file_path: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: user,
      key: 'id',
    },
    onDelete: 'CASCADE', 
  },
});

Photo.belongsTo(user, {
    foreignKey: 'user_id',
    as: 'user', 
  });


user.hasMany(Photo, { foreignKey: 'user_id' });
Photo.belongsTo(user, { foreignKey: 'user_id' });

export default Photo;
