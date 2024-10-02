"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/ShoppingItem.ts
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class ShoppingItem extends sequelize_1.Model {
}
ShoppingItem.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'shopping_items',
});
exports.default = ShoppingItem;
