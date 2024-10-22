import React, { useState } from "react";
import "./BoysOut.css";

function BoysOut() {
  const [buttonsState, buttonsAcite] = useState(1);
  const [outpageState, outpageActive] = useState(0);
  const [inpageState, inpageActive] = useState(0);
  const [listState, listActive] = useState(0);
  const [checkState, checkActive] = useState(0);
  const [historyState, historyActive] = useState(0);

  const HideButtons = () => {
    buttonsAcite((p) => 0);
  };
  const ShowButtons = () => {
    buttonsAcite((p) => 1);
  };

  const HideOutpage = () => {
    outpageActive((p) => 0);
  };

  const ShowOutpage = () => {
    outpageActive((p) => 1);
  };

  const HideInpage = () => {
    inpageActive((p) => 0);
  };

  const ShowInpage = () => {
    inpageActive((p) => 1);
  };

  const HideListpage = () => {
    listActive((p) => 0);
  };

  const ShowListpage = () => {
    listActive((p) => 1);
  };

  const HideCheckpage = () => {
    checkActive((p) => 0);
  };

  const ShowCheckpage = () => {
    checkActive((p) => 1);
  };

  const HideHistorypage = () => {
    historyActive((p) => 0);
  };

  const ShowHistorypage = () => {
    historyActive((p) => 1);
  };

  const HandleOut = () => {
    HideButtons();
    ShowOutpage();
  };

  const HandleIn = () => {
    HideButtons();
    ShowInpage();
  };

  const HandleList = () => {
    HideButtons();
    ShowListpage();
  };

  const HandleCheck = () => {
    HideButtons();
    ShowCheckpage();
  };

  const HandleHistory = () => {
    HideButtons();
    ShowHistorypage();
  };

  const OutBackBtn = () => {
    HideOutpage();
    ShowButtons();
  };

  const InBackBtn = () => {
    HideInpage();
    ShowButtons();
  };

  const ListBackBtn = () => {
    HideListpage();
    ShowButtons();
  };

  const CheckBackBtn = () => {
    HideCheckpage();
    ShowButtons();
  };

  const HistoryBackBtn = () => {
    HideHistorypage();
    ShowButtons();
  };

  return (
    <div>
      <div className="MainBody">
        <p>Boys Out</p>
        {buttonsState !== 0 && (
          <div className="ButtonsBox">
            <button onClick={HandleList} className="List">
              List
            </button>

            <button onClick={HandleOut} className="Out">
              Out
            </button>

            <button onClick={HandleIn} className="In">
              In
            </button>

            <button onClick={HandleCheck} className="Check">
              Check
            </button>

            <button onClick={HandleHistory} className="History">
              History
            </button>
          </div>
        )}

        {listState !== 0 && (
          <div className="">
            <button onClick={ListBackBtn} className="InBackBtn">
              X
            </button>
            list
          </div>
        )}

        {outpageState !== 0 && (
          <div className="OutPage">
            <button onClick={OutBackBtn} className="OutBackBtn">
              X
            </button>
            out
          </div>
        )}

        {inpageState !== 0 && (
          <div className="InPage">
            <button onClick={InBackBtn} className="InBackBtn">
              X
            </button>
            in
          </div>
        )}

        {checkState !== 0 && (
          <div className="">
            <button onClick={CheckBackBtn} className="InBackBtn">
              X
            </button>
            check
          </div>
        )}
        {historyState !== 0 && (
          <div className="">
            <button onClick={HistoryBackBtn} className="InBackBtn">
              X
            </button>
            history
          </div>
        )}
      </div>
    </div>
  );
}

export default BoysOut;
