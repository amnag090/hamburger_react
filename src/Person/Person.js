import React from "react";

const person = (props) =>{
return(
    <div>
        <p> Hellp Im {props.name} and Im {props.age} years old..</p>
        <p> {props.children}</p>
<span>{props.hobbies}</span>
    </div>

) 

}

export default person;