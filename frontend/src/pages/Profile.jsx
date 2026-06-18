import {

useState

} from "react";

import {

saveProfile

} from "../services/profileService";

import "../styles/profile.css";

function Profile(){

const [form,

setForm]=useState({

user_id:"",

age:"",

education:"",

degree:"",

skills:"",

interests:"",

personality_traits:"",

experience_level:"",

work_preference:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:

e.target.value

});

};

const handleSubmit=

async(e)=>{

e.preventDefault();

try{

await saveProfile(

form

);

alert(

"Profile Saved"

);

}

catch(error){

alert(

"Error"

);

}

};

return(

<div

className="profile-container"

>

<h1>

Profile

</h1>

<form

onSubmit={handleSubmit}

>

<input

name="user_id"

placeholder="User Id"

onChange={handleChange}

/>

<input

name="age"

placeholder="Age"

onChange={handleChange}

/>

<input

name="education"

placeholder="Education"

onChange={handleChange}

/>

<input

name="degree"

placeholder="Degree"

onChange={handleChange}

/>

<input

name="skills"

placeholder="Skills"

onChange={handleChange}

/>

<input

name="interests"

placeholder="Interests"

onChange={handleChange}

/>

<input

name="personality_traits"

placeholder="Personality Traits"

onChange={handleChange}

/>

<input

name="experience_level"

placeholder="Experience"

onChange={handleChange}

/>

<input

name="work_preference"

placeholder="Work Preference"

onChange={handleChange}

/>

<button>

Save Profile

</button>

</form>

</div>

);

}

export default Profile;