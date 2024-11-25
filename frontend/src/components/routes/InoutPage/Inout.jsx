import React, { useState } from "react";
import "./inout.css";
import "./header.css";

import BoysOut from "./BoysOut/BoysOut";
import BoysHome from "./BoysHome/BoysHome";
import GirlsHome from "./GirlsHome/GirlsHome";
import GirlsOut from "./GirlsOut/GirlsOut";
import StaffHome from "./StaffHome/StaffHome";
import VisitersOut from "./VisitersOut/VisitersOut";

function Inout() {
  const [page, setpage] = useState("boyshome");

  const handleBoysOut = () => {
    setpage((p) => {
      return "boysout";
    });
  };

  const handleBoysHome = () => {
    setpage((p) => {
      return "boyshome";
    });
  };

  const handleGirlsHome = () => {
    setpage((p) => {
      return "girlshome";
    });
  };

  const handleGirlsOut = () => {
    setpage((p) => {
      return "girlsout";
    });
  };

  const handleStaffHome = () => {
    setpage((p) => {
      return "staffhome";
    });
  };

  const handleVisitersOut = () => {
    setpage((p) => {
      return "visitersout";
    });
  };

  console.log(page);

  return (
    <div>
      <div className="Header">
        <button onClick={handleBoysHome} href="">BoysHome</button>
        <button onClick={handleBoysOut} href="">BoysOut</button>
        <button onClick={handleGirlsHome} href="">GirlsHome</button>
        <button onClick={handleGirlsOut} href="">GirlsOut</button>
        <button onClick={handleStaffHome} href="">StaffHome</button>
        <button onClick={handleVisitersOut} href="">Visiters</button>
      </div>

      {page === "boyshome" && <BoysHome />}
      {page === "boysout" && <BoysOut />}
      {page === "girlshome" && <GirlsHome/>}
      {page === "girlsout" && <GirlsOut/>}
      {page === "staffhome" && <StaffHome/>}
      {page === "visitersout" && <VisitersOut/>}
      
    </div>
  );
}

export default Inout;
