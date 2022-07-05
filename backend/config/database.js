import {Sequelize} from "sequelize";
 
const db = new Sequelize('siakad','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});
 
export default db;