import { useEffect, useState } from "react";


function Student(){

    const [username, setUsername] = useState("user");

     function buttonClick(name)
     {
        setUsername(name)
     }

     useEffect( ()=>{
        alert("componenet loaded...")
     }, [])

    return (
        <div>
            <h1>{username}</h1><br/>

            <button onClick={()=> buttonClick("muthu")}>chage username </button>
        </div>
    );
}

export default Student;