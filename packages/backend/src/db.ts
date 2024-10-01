import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5433/demo', {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
