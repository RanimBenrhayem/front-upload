import React from 'react'
import { AiFillDelete,AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import axios from "axios"
import { useState } from "react"

function SingleFilePreview({element ,handleShow,deletefiles}) {
    const [showFile,setShowFile] = useState(false)


    const button = showFile  ? <button className="eyebutton" onClick={()=> {setShowFile(false) ; handleShow("")}}><AiFillEyeInvisible/> </button>: < button className="eyebutton" onClick={()=>{handleShow(element.fileName); setShowFile(true)}}><AiFillEye/> </button>

  return (
    <div>
     
     <tr>
              <td>{element.originaleFileName}</td>
              <td>{button}</td>
            <td ><button  className="buttonpoubelle" onClick={()=>deletefiles(element.fileName)}><AiFillDelete/></button></td>  

            </tr>
           



    </div>
  )
}

export default SingleFilePreview