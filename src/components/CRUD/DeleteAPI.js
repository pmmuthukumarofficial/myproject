import axios from "axios"
import { useState } from "react"
import { Button } from "react-bootstrap"


function DeleteAPI() {

    const [id, setBookid] = useState('')

    function deleteBook(){
        axios.delete('http://localhost:8081/api/book/'+id)
        .then((res)=>{
            console.log(res);
        })
    }   

    return (
        <>
            <div>
                <input type='text' placeholder="Book Id" onChange={(e)=>setBookid(e.target.value)}/>
                <button variant="danger" onClick={deleteBook}>Delete</button>
            </div>
        </>
    )
}

export default DeleteAPI