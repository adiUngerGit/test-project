"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5433/demo', {
    dialect: 'postgres',
    logging: false,
});
exports.default = sequelize;
