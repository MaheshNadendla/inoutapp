import React, { useState } from "react";
import "./inout.css";
import "./header.css";

import BoysOut from "./BoysOut/BoysOut";
import BoysHome from "./BoysHome/BoysHome";
import GirlsHome from "./GirlsHome/GirlsHome";

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

  console.log(page);

  return (
    <div>
      <div className="Header">
        <button onClick={handleBoysHome} href="">BoysHome</button>
        <button onClick={handleBoysOut} href="">BoysOut</button>
        <button onClick={handleGirlsHome} href="">GirlsHome</button>
        <button href="">GirlsOut</button>
        <button href="">StaffHome</button>
        <button href="">Visiters</button>
      </div>

      {page === "boyshome" && <BoysHome />}
      {page === "boysout" && <BoysOut />}
      {page === "girlshome" && <GirlsHome/>}
    </div>
  );
}

export default Inout;
