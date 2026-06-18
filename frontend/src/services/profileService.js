import api from "./api";

export const saveProfile=

(data)=>{

return api.post(

"/profile",

data

);

};

export const getProfile=

(id)=>{

return api.get(

`/profile/${id}`

);

};