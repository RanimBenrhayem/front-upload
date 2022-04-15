import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import SingleFilePreview from "./SingleFilePreview";





export const UserFiles = ()=> {

    const [files,setFiles] = useState([])
   const [isDeleted , setIsDeleted] = useState(false)
    const [array,setArray] = useState([])
    const [showFile , setShowFile] = useState("")
    const fileReader = new FileReader()

    useEffect(async()=>{

        const response = await axios({
            method: "get",
            url :" http://localhost:8080/user/files/625046ac02110a71c9d039c3",
        })
        setFiles(response.data)
    }, [isDeleted])
    
    const[fileHeader,setFileHeader]=useState([])
    const handleShow =  async (fileName)=> {
      if(fileName.length>0){
        setShowFile("")
        setArray([])
        const response = await axios({
          method: "get" ,
          url: `http://localhost:8080/uploads/${fileName}`
      })
      setShowFile(response.data)

   
          csvFileToArray(response.data);
          fileReader.readAsText(response.data);
      } else {
        setShowFile("")
        setArray([])
      }
       
           // console.log(file)
            
          
         
}

const deletefiles = async (fileName)=>{
  const response = await axios ({
    method:"delete",
    url:`http://localhost:8080/uploads/files/delete/${fileName}`,
    data : {idUser:"625046ac02110a71c9d039c3"}
      


  })
  setIsDeleted(!isDeleted)
 
}
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

     

  
    const headerKeys = Object.keys(Object.assign({}, ...array));
    console.log(array)

    return(
<>

{files.length>0 && (
  <>
  <tr>
  <th> Files Uploaded</th>
  <th>See File</th>
  <th>Delete</th>
</tr>
    {files.map((element,index)=> {
        
        return (
            <>
         
           <SingleFilePreview element={element}  handleShow={handleShow}  deletefiles={deletefiles}/>
            
      
             {/* <button onClick={()=>handleShow(element.fileName)}>see file</button>   <button>*/}
            </>
        )})}
        </>
        )}



{showFile && (
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