import axios from "axios"
import { useState } from "react"
import Button from 'react-bootstrap/Button';


function PostAPI(){

    const [book_id, setBookid] = useState('')
    const [book_name, setBookname] = useState('')
    const [book_author, setBookauthor] = useState('')
    const [book_price, setBookprice] = useState(0)
    const [book_count, setBookcount] = useState(0)
   // const [newBook, setNewbook] = useState({})

    function sendData(e){
        e.preventDefault();

        const newBook = {
            bookId: book_id,
            bookName: book_name,
            author:book_author,
            price:book_price,
            count:book_count
        }
        
        axios({
            method: "put", // put
            url: "http://localhost:8081/api/book",
            data: newBook,
            headers: {'Content-Type': 'application/json' },
        }).then((res)=>{
                //console.log(res);              
                if(res.status == 200)
                    alert('book Added successfully...')
                
            }) 
            
            
    }   

    return (
        <>
            <form onSubmit={sendData}>
                <input type='text' placeholder = "BookID" onChange={(e)=> setBookid(e.target.value)}/> <br></br>
                <input type='text' placeholder = "Book Name" onChange={(e)=> setBookname(e.target.value)}/> <br></br>
                <input type='text' placeholder = "Author" onChange={(e)=> setBookauthor(e.target.value)} /> <br></br>
                <input type='text' placeholder = "Price" onChange={(e)=> setBookprice(e.target.value)}/> <br></br>
                <input type='text' placeholder = "Count" onChange={(e)=> setBookcount(e.target.value)}/> <br></br>
                <input type='submit' value="Add" />
            </form>
        </>
    )
}

export default PostAPI