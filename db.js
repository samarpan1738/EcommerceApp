const Sequelize=require('sequelize');
const db = new Sequelize('shop','u1','mypass555',
{
    host:'localhost',
    dialect:'mysql'
});

const User=db.define('users',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:
    {
        type:Sequelize.STRING,
        allowNull:false
    }
});

const Product=db.define('products',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:
    {
       type:Sequelize.STRING,
        allowNull:false
    },
    price:
    {
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    },
    manufacturer: Sequelize.STRING
})
db.sync().then(()=>console.log('Database Synced')).catch((err)=>console.error(err))
exports=module.exports={User,Product};