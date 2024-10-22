import React, { useState } from "react";
import "./inout.css";
import "./header.css";

import BoysOut from "./BoysOut/BoysOut";
import BoysHome from "./BoysHome/BoysHome";

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

  console.log(page);

  return (
    <div>
      <div className="Header">
        <button onClick={handleBoysHome} href="">BoysHome</button>
        <button onClick={handleBoysOut} href="">
          BoysOut
        </button>
        <button href="">GirlsHome</button>
        <button href="">GirlsOut</button>
        <button href="">StaffHome</button>
        <button href="">Visiters</button>
      </div>

      {page === "boyshome" && <BoysHome />}
      {page === "boysout" && <BoysOut />}
    </div>
  );
}

export default Inout;
