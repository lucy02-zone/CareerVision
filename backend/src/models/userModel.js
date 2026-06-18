const db = require("../config/db");

const createUser = (name,email,password,callback)=>{

const query =

`INSERT INTO users(name,email,password)

VALUES(?,?,?)`;

db.query(

query,

[name,email,password],

callback

);

};

const findUserByEmail=(email,callback)=>{

db.query(

"SELECT * FROM users WHERE email=?",

[email],

callback

);

};

module.exports={

createUser,

findUserByEmail

};