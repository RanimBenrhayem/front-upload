import { useEffect } from "react"

 import axios from "axios"
export const TestDownload = ()=> {

    useEffect(async()=>{
const response = await axios({
    url : "http://localhost:8080/uploads/join/files",
    method : "post",
    data :  
    {
    
        "attribut1" : "email",
        "attribut2" : "email",
        "fileName1" : "631279ece5f4c53cb6f8d0e3c43a2a5c.csv",
        "fileName2" : "631279ece5f4c53cb6f8d0e3c43a2a5c.csv"
    }

    
    
})
console.log(response)
    })


    return (
        <>
        aaaa
        </>
    )
}