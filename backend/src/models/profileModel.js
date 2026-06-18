const db = require("../config/db");

const createProfile = (

profile,

callback

)=>{

const query =

`INSERT INTO user_profiles(

user_id,

age,

education,

degree,

skills,

interests,

personality_traits,

experience_level,

work_preference

)

VALUES(?,?,?,?,?,?,?,?,?)`;

db.query(

query,

[

profile.user_id,

profile.age,

profile.education,

profile.degree,

profile.skills,

profile.interests,

profile.personality_traits,

profile.experience_level,

profile.work_preference

],

callback

);

};

const getProfile=(userId,callback)=>{

db.query(

"SELECT * FROM user_profiles WHERE user_id=?",

[userId],

callback

);

};

module.exports={

createProfile,

getProfile

};