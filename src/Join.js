// import React from 'react'
// import axios from "axios"
// import { CSVLink } from 'react-csv';
// import { useState } from 'react';
// import {UploadJoinFiles} from "./services/axios"
// function Join() {
//     const [data,setData]= useState("")
 
    



//  async   function click (){
    
//         const response  = await UploadJoinFiles()
//         if (response.success ===true){
        
//         console.log(response)
//         setData (response.data)}


// return(
  
//     <div>
// hello join file
// <button onClick={click}>click me !</button>
// <CSVLink data={data} filename={'JoinFile.csv'}>
// 	<button>Download</button>
// </CSVLink>

// <CSVLink
//   data={data}
//   asyncOnClick={true}
//   onClick={(event, done) => {
//     console.log(event)
//     const formData = new FormData();
//     const blob = new File(data,"test.csv" , {type:"text/csv"})
//     formData.append("file",blob)
//     console.log(blob)
//     axios({
//       url:'http://localhost:8080/uploads/join/files',
//         method:'POST',
//         data : formData
//     }).then((response) => {
//       console.log(response)
//       done(false); // REQUIRED to invoke the logic of component
//     });
//     done(false);
//   }}
// >
//  Upload 
// </CSVLink>;

//     </div>
// )
// }}

// export default Join