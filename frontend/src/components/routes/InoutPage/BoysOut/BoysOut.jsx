import React from "react";
// import "./BoysOut.css";
import AllRouts from "../Allinout/AllRouts";

function BoysOut() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Boys Outing"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Boys"
          subOutHead  = "Boys Outing Out"
          subInHead = "Boys Outing In"
          subCheckHead = "Boys at Outing"
          subHistoryHead = "Boys Outing History"
          
          totalListLink = "http://localhost:8080/boysouting/all/"
          outSendingLink = "http://localhost:8080/boysouting/out/" 
          inSendingLink = "http://localhost:8080/boysouting/in/" 
          checkListLink = "http://localhost:8080/boysouting/check/"
          historyListLink = "http://localhost:8080/boysouting/history/"
      
      />
    </div>
  );
}

export default BoysOut;
