import React from 'react'
import { BsFillGearFill } from "react-icons/bs";
function Test() {
   
    
  return (
      <>
    <div>
   
    <nav className='nav'>
 <ul>
  <li><img src='logo.png' alt=''/></li>
  <li><a href="notifications">Notifications</a></li>
  <li><a href="share">share</a></li>
  <li><a href="print">Print</a></li>
  <li><select >
     
      <option> </option>  
      <option>Log out</option> 
      <option>Contact us</option> 
      <option>About us</option> 
      <option>List of added files</option> 
      <option>New project</option> 
      <option>List of projects already done</option> 
      <option>View report</option> 
             </select></li>
 </ul>
</nav>
    </div>
    <div> 
    <nav>
 <ul className='verticalnavbar'>
     <div className='li'>
  
  <li ><a href="dashboards">Dashboards</a></li>
  <li><a href="warnings">Warnings</a></li>
  <li><a href="recommandations">recommandations</a></li>
  </div>
 </ul>
</nav>
        </div> 
    
    </>
  )
}

export default Test;
