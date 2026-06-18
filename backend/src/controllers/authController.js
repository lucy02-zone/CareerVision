const bcrypt=require("bcryptjs");

const tokenGenerator=require("../utils/tokenGenerator");

const userModel=require("../models/userModel");

const authService=require("../services/authService");

const register=async(req,res)=>{

try{

const {name,email,password}=req.body;

await authService.registerUser(

name,

email,

password

);

res.status(201).json({

message:"Registered"

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};

const login=(req,res)=>{

const {email,password}=req.body;

userModel.findUserByEmail(

email,

async(error,result)=>{

if(result.length===0){

return res.status(404)

.json({

message:"User not found"

});

}

const valid=

await bcrypt.compare(

password,

result[0].password

);

if(!valid){

return res.status(400)

.json({

message:"Wrong password"

});

}

const token=

tokenGenerator(

result[0].id

);

res.json({

token

});

}

);

};

module.exports={

register,

login

};