import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("nextjs", "root", "ar7711", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;