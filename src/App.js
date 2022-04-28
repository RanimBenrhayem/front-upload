import Test from "./Test";
import "./App.css";
import Files from "./Files";
import Console from "./Console";
import Header from "./Header";
import SideBar from "./SideBar";
import FileUploader from "./fileUpload/FileUpload";
import { UserFiles } from "./UserFiles";
import Print from "./Print";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { TestDownload } from "./TestDownload";
import Join from "./Join";
import Table from "./Table"


function App() {
  return (
    <div>
      
      {/* <Test/> */}
      {/* <Files/>  */}
      {/* <Console/> 
    <Header/>
    <SideBar/> */}
      {/* <FileUploader/> */}
      <UserFiles />
      {/* <Print/> */}
      {/* <TestDownload/> */}
      
      {/* <Table/> */}
      {/* <Join/> */}
    </div>
  );
}

export default App;
