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

          subListHead = "Total Boys"
          subOutHead  = "Boys Outing Out"
          subInHead = "Boys Outing In"
          subCheckHead = "Boys at Outing"
          subHistoryHead = "Boys Outing History"
          
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
