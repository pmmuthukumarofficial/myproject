import axios from "axios"
import { useEffect, useState } from "react"


function FunctionalGetAPI(){

    const [catData, setCatdata] = useState("")

    useEffect(()=>{
        axios.get('https://catfact.ninja/fact')
        .then((res)=>{
            setCatdata(res.data.fact)
        })
    }, [])

    return (
        <>
        <h1>{catData}</h1>
        </>
    )
}

export default FunctionalGetAPI