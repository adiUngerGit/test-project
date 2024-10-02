// models/ShoppingItem.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db'; 

class ShoppingItem extends Model {
  public id!: number;
  public name!: string;
}

ShoppingItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'shopping_items',
  }
);

export default ShoppingItem;
