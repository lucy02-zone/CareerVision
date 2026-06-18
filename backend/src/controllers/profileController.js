const profileService=

require("../services/profileService");

const profileModel=

require("../models/profileModel");

const createProfile=async(

req,

res

)=>{

try{

await profileService

.saveProfile(

req.body

);

res.status(201)

.json({

message:

"Profile saved"

});

}

catch(error){

res.status(500)

.json({

message:

error.message

});

}

};

const getProfile=(

req,

res

)=>{

const id=req.params.id;

profileModel.getProfile(

id,

(error,result)=>{

if(error){

return res

.status(500)

.json({

message:

error.message

});

}

res.json(result);

}

);

};

module.exports={

createProfile,

getProfile

};