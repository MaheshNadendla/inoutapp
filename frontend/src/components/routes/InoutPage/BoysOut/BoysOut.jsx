import React from "react";
// import "./BoysOut.css";
import AllRouts from "../Allinout/AllRouts";

function BoysOut() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Boys Home"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "sub"
          subOutHead  = "sub"
          subInHead = "sub"
          subCheckHead = "sub"
          subHistoryHead = "sub"
          
          totalListLink = "http://localhost:8080/totalboys/"
          outSendingLink = "http://localhost:8080/boyshomes/" 
          inSendingLink = "http://localhost:8080/boysin/" 
          checkListLink = "http://localhost:8080/boyshomes/"
          historyListLink = "http://localhost:8080/boyshomes/history"
      
      />
    </div>
  );
}

export default BoysOut;
