// models/ItemList.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db'; // Assuming you have a sequelize instance

class ItemList extends Model {
  public id!: number;
  public name!: string;
}

ItemList.init(
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
    tableName: 'item_lists', // This creates a table named 'item_lists'
  }
);

export default ItemList;
