import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class User extends Model {
  public id!: number;
  public username!: string;  // `username`, not `name`
  public email!: string;
  public password!: string;  // `password` is required
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {  // Change 'name' to 'username' if you're using 'username'
      type: DataTypes.STRING,
      allowNull: false,  // Validation requires that username cannot be null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,  // Validation requires that password cannot be null
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
