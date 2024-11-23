import React from "react";
// import "./BoysOut.css";
import AllRouts from "../Allinout/AllRouts";

function BoysHome() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Boys Home"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Boys"
          subOutHead  = "Boys Home Out"
          subInHead = "Boys Home In"
          subCheckHead = "Boys at Home"
          subHistoryHead = "Boys Home History"
          
          totalListLink = "http://localhost:8080/boyshome/all/"
          outSendingLink = "http://localhost:8080/boyshome/out/" 
          inSendingLink = "http://localhost:8080/boyshome/in/" 
          checkListLink = "http://localhost:8080/boyshome/check/"
          historyListLink = "http://localhost:8080/boyshome/history/"
      
      />
    </div>
  );
}

export default BoysHome;