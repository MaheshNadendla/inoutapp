import React from "react";
// import "./GirlsOut.css";
import AllRouts from "../Allinout/AllRouts";

function GirlsOut() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Girls Outing"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Girls"
          subOutHead  = "Girls Outing Out"
          subInHead = "Girls Outing In"
          subCheckHead = "Girls at Outing"
          subHistoryHead = "Girls Outing History"
          
          totalListLink = "http://localhost:8080/girlsouting/all/"
          outSendingLink = "http://localhost:8080/girlsouting/out/" 
          inSendingLink = "http://localhost:8080/girlsouting/in/" 
          checkListLink = "http://localhost:8080/girlsouting/check/"
          historyListLink = "http://localhost:8080/girlsouting/history/"
      
      />
    </div>
  );
}

export default GirlsOut;
