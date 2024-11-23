import React from "react";
// import "./BoysOut.css";
import AllRouts from "../Allinout/AllRouts";

function GirlsHome() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Girls Home"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Girls"
          subOutHead  = "Girls Home Out"
          subInHead = "Girls Home In"
          subCheckHead = "Girls at Home"
          subHistoryHead = "Girls Home History"
          
          totalListLink = "http://localhost:8080/girlshome/all/"
          outSendingLink = "http://localhost:8080/girlshome/out/" 
          inSendingLink = "http://localhost:8080/girlshome/in/" 
          checkListLink = "http://localhost:8080/girlshome/check/"
          historyListLink = "http://localhost:8080/girlshome/history/"
      
      />
    </div>
  );
}

export default GirlsHome;