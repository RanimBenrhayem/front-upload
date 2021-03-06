import React from 'react'
import { getJoinedFileById ,deleteJoinedFiles} from './services/axios';
import {AiOutlineClose,AiFillEye,AiFillEyeInvisible,AiFillCloseCircle} from "react-icons/ai";
import { useState } from "react"
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function JoinedFilePreview({id ,handleShow,isDeleted,setIsDeleted}) {
    const [showFile,setShowFile] = useState(false)
    const [fileInfo , setFileInfo] = useState({})
  

    
    useEffect(async()=>{
      const response  = await getJoinedFileById(id)
      if (response.success===true){
        setFileInfo(response.data)

      }
    }

,[])

const button =!(fileInfo
    && Object.keys(fileInfo).length === 0
    && Object.getPrototypeOf(fileInfo) === Object.prototype) && showFile  ? <button className="showeyes" onClick={()=> {setShowFile(false) ; handleShow("")}}><AiFillEyeInvisible/> </button>: < button className="showeyes" onClick={()=>{handleShow(fileInfo.filename); setShowFile(true)}}><AiFillEye/> </button>
    const handleDelete = ()=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteJoinedFiles(id,"aaa").then((response) =>{
             if(response.success===true) {
              const Toast = Swal.mixin({
                toast: true,
                position: "bottom-left",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });
      
              Toast.fire({
                icon: "success",
                title: response.data,
              });
              setIsDeleted(!isDeleted)
             }else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
             }
           })
           
      
      
          }
        })
      }


      return (
        <>
       {!(fileInfo
    && Object.keys(fileInfo).length === 0
    && Object.getPrototypeOf(fileInfo) === Object.prototype) && (
      <tr>
      <td>
       <label>{fileInfo.metadata.originalFileName}</label>
      
      
      </td>  
               {/* <td> <CheckBox ></CheckBox>{element.originaleFileName}</td> */}
               <td >{button}</td>
             <td ><button  className="buttonpoubelle" onClick={handleDelete}><AiFillCloseCircle/></button></td>  
          
             </tr>
            
    )}
           
               
             
            
             
                </>
               
      )
     
      }
     


export default JoinedFilePreview