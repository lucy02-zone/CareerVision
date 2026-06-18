const profileModel=

require("../models/profileModel");

const saveProfile=(profile)=>{

return new Promise(

(resolve,reject)=>{

profileModel.createProfile(

profile,

(error,result)=>{

if(error){

reject(error);

}

else{

resolve(result);

}

}

);

}

);

};

module.exports={

saveProfile

};