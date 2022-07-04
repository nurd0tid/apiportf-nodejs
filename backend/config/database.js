import {Sequelize} from "sequelize";
 
const db = new Sequelize('siakad','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
 
export default db;