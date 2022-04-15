import React,{ useState } from 'react'
import axios from 'axios';
//import  UserFiles  from "./UserFiles";
   
   function Files() {
     const [file, setFile] = useState();
     const [array, setArray] = useState([]);
     const [show,setShow] = useState(false);
     const fileReader = new FileReader();
   
     const handleOnChange = (e) => {
       setFile(e.target.files[0]);
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
   
     const handleOnSubmit = async(e) => {
       e.preventDefault();
     
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file",file)

          const response = await axios({
            url:'http://localhost:8080/uploads',
            method:'POST',
            data : formData

            
          })
          console.log(response)
        }
        
      } catch (error) {
        console.log(error)
      }
   
       if (file) {
         fileReader.onload = function (event) {
           const text = event.target.result;
           csvFileToArray(text);
           console.log(file)
           };
   
         fileReader.readAsText(file);
         setShow(true)
       }
   
     };
     
    


     const button = show  ? <button onClick={()=> setShow(false)}>Hide </button>: <button onClick={handleOnSubmit}>See file in table format</button>

   
     const headerKeys = Object.keys(Object.assign({}, ...array));
   
     return (
       <div style={{ textAlign: "center" }}>
         <h1>REACTJS CSV IMPORT EXAMPLE </h1>
         <form  encType='multipart/form-data'>
           <input
             type={"file"}
             id={"csvFileInput"}
             accept={".csv"}
             onChange={handleOnChange}
             name='file'
           />
          
          {button}
          {/* <button onClick={clickButton}>upload</button> */}
         
         </form>
   
         <br />
         
         <br />
         
         <br />
   
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
         
       </div>
     );
                 }
export default Files