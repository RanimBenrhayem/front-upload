import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
import { useState } from "react";
import {AiOutlineCloudUpload,AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { saveAs } from "file-saver";
import { CSVLink } from 'react-csv';



function FileUploader() {
 const [file,setFile] = useState([]);
 const [array, setArray] = useState([]);
 const [show,setShow] = useState(false);
 const fileReader = new FileReader();
  
  function handleChange(e)  {
   //  setFile(e.target.files[0]);
    console.log(file)
  setFile (e)
  };


  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
  
    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
  
    setArray(array);
  };
async function handleUpload (){
     
  try {
    if (file[0]) {
      const formData = new FormData();
      formData.append("file",file[0])

      const response = await axios({
        url:'http://localhost:8080/uploads/625046ac02110a71c9d039c3',
        method:'POST',
        data : formData

        
      })
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
        console.log(file[0])
        };
  
      fileReader.readAsText(file[0]);
      //console.log(response)
      alert(response.data)
    }
    
  } catch (error) {
    console.log(error)
  }
 

}
const saveFile = () => {
  
  saveAs(
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "example.pdf"
  );
};


const button = show  ? <button className="eyebutton" onClick={()=> setShow(false)}><AiFillEyeInvisible/> </button>: <button className='eyebutton' onClick={()=>setShow(true)}><AiFillEye/></button>

   
const headerKeys = Object.keys(Object.assign({}, ...array));

  
    return( 
      <>
      {/* <CSVLink data={file} filename={'user-list.csv'}>
	<button>Download</button>
</CSVLink> */}
          <DropzoneArea 
          
    useChipsForPreview
    previewText="Selected files"
    showPreviews={true}
    showPreviewsInDropzone={false}
    filesLimit={1}
           acceptedFiles={[".csv, text/csv, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values"]}
    onChange={handleChange} 
    />
    {file.length>0 && (
    
    <span>
          {button}

    <button className="eyebutton" title="click here" onClick={handleUpload}><AiOutlineCloudUpload/></button>
    
    </span>
    )}
  
    { show && (
    <table>
           <thead>
             <tr key={"header"}>
               {headerKeys.map((key) => (
                 <th>{key}</th>
               ))}
             </tr>
           </thead>
   
           <tbody>
             {array.map((item) => (
               <tr key={item.id}>
                 {Object.values(item).map((val) => (
                   <td>{val}</td>
                 ))}
               </tr>
             ))}
           </tbody>
         </table>
   )}
  
  
    </>
    



   
   
    )
    
  }


export default FileUploader