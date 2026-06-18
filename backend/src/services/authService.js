const bcrypt=require("bcryptjs");

const userModel=require("../models/userModel");

const registerUser=async(name,email,password)=>{

const hashedPassword=

await bcrypt.hash(password,10);

return new Promise((resolve,reject)=>{

userModel.createUser(

name,

email,

hashedPassword,

(error,result)=>{

if(error){

reject(error);

}

else{

resolve(result);

}

}

);

});

};

module.exports={

registerUser

};