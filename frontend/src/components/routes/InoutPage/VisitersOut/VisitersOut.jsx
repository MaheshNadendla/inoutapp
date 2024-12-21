import React from "react";
// import "./VisitersOut.css";
import Visiters from "../Visiters/Visiters";

function VisitersOut() {
 

  return (
    <div>
      <Visiters

          pageHeading = "Visiters Outing"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Visiters"
          subOutHead  = "Visiters Outing Out"
          subInHead = "Visiters Outing In"
          subCheckHead = "Visiters at Outing"
          subHistoryHead = "Visiters Outing History"
          
          totalListLink = "http://localhost:8080/visitershome/all/"
          outSendingLink = "http://localhost:8080/visitershome/out/" 
          inSendingLink = "http://localhost:8080/visitershome/in/" 
          checkListLink = "http://localhost:8080/visitershome/check/"
          historyListLink = "http://localhost:8080/visitershome/history/"
      
      />
    </div>
  );
}

export default VisitersOut;
