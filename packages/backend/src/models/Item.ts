// models/Item.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import ItemList from './ItemList'; // Import the ItemList model

class Item extends Model {
  public id!: number;
  public name!: string;
  public listId!: number; // Foreign key for the ItemList
}

Item.init(
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
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ItemList, // Points to the ItemList model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'items', // This creates a table named 'items'
  }
);

// Set up the relationship between Item and ItemList
Item.belongsTo(ItemList, { foreignKey: 'listId', as: 'list' });
ItemList.hasMany(Item, { foreignKey: 'listId', as: 'items' });

export default Item;
