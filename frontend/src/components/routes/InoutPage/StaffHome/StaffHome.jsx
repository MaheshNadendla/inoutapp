import React from "react";
// import "./StaffsOut.css";
import AllRouts from "../Allinout/AllRouts";

function StaffHome() {
 

  return (
    <div>
      <AllRouts

          pageHeading = "Staff Home"

          ListBtn = "List"
          OutBtn = "Out"
          InBtn  = "In"
          CheckBtn = "Check"
          HistoryBtn = "History"

          subListHead = "Total Staffs"
          subOutHead  = "Staffs Home Out"
          subInHead = "Staffs Home In"
          subCheckHead = "Staffs at Home"
          subHistoryHead = "Staffs Home History"
          
          totalListLink = "http://localhost:8080/staffshome/all/"
          outSendingLink = "http://localhost:8080/staffshome/out/" 
          inSendingLink = "http://localhost:8080/staffshome/in/" 
          checkListLink = "http://localhost:8080/staffshome/check/"
          historyListLink = "http://localhost:8080/staffshome/history/"
      
      />
    </div>
  );
}

export default StaffHome;