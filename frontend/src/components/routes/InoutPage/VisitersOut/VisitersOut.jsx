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
          
          totalListLink = "http://localhost:8080/visitersouting/all/"
          outSendingLink = "http://localhost:8080/visitersouting/out/" 
          inSendingLink = "http://localhost:8080/visitersouting/in/" 
          checkListLink = "http://localhost:8080/visitersouting/check/"
          historyListLink = "http://localhost:8080/visitersouting/history/"
      
      />
    </div>
  );
}

export default VisitersOut;
