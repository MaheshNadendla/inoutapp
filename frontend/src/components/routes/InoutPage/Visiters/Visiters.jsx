
import React, { useState,useEffect } from "react";
import '../Allinout/AllRouts.css';
import axios from "axios";
import toast from "react-hot-toast";
import Tablet from "../Tablet";

function AllRouts({ 

            pageHeading : pageHeading,

            ListBtn : ListBtn,
            OutBtn : OutBtn,
            InBtn  : InBtn,
            CheckBtn : CheckBtn,
            HistoryBtn : HistoryBtn,

            subListHead : subListHead,
            subOutHead  : subOutHead,
            subInHead : subInHead,
            subCheckHead : subCheckHead,
            subHistoryHead : subHistoryHead,

            totalListLink : totalListLink,
            outSendingLink : outSendingLink,
            inSendingLink : inSendingLink,
            checkListLink : checkListLink,
            historyListLink : historyListLink

}) {



    //two sates :
    // 1) incollege : inhome/outing
    // * totalPage => 

            // *heading => {pageHeading} 
            //  1) List{ListBtn,subListHead,[totalList,setTotalList],totalListLink} , 
            //  2) Out{OutBtn,subOutHead,[rollTypeOut,setRollTypeOut],[rollTypeOutPlace,setRollTypeOutPlace],sendTypeOutBtn,outSendingLink} , 
            //  3) In{InBtn,subInHead,[rollTypeIn,setRollTypeIn],sendTypeInBtn,inSendingLink} ,
            //  4) Check{CheckBtn,subCheckHead,[checkList,setCheckList],checkListLink} , 
            //  5) History{HistoryBtn,subHistoryHead,[historyList,setHistoryList],historyListLink},


    //heading
    // const pageHeading = "Boys Home";


    //page

    const [page, setpage] = useState("buttons");

    // const ListBtn = "List" ;

    // const OutBtn = "Out" ;

    // const InBtn = "In" ;

    // const CheckBtn = "Check" ;

    // const HistoryBtn = "History" ;

    //List

    // const subListHead  = "" ;
    const [totalList, setTotalList] = useState([]); 
    // const totalListLink  = "http://localhost:8080/totalboys/" ;



    //Out

    // const subOutHead  = "" ;
    const [rollTypeOut, setRollTypeOut] = useState("");
    const [rollTypeOutPlace,setRollTypeOutPlace] = useState("");
    // const outSendingLink  = "http://localhost:8080/boyshomes/" ;

    //In

    // const subInHead  = "" ;
    const [rollTypeIn, setRollTypeIn] = useState("");
    // const inSendingLink = "http://localhost:8080/boysin/" ;

    //check 

    // const subCheckHead  = "" ;
    const [checkList, setCheckList] = useState([]); 
    // const checkListLink  = "http://localhost:8080/boyshomes/" ;

    //History

    // const subHistoryHead  = "" ;
    const [historyList, setHistoryList ] = useState([]); 
    // const historyListLink  = "http://localhost:8080/boyshomes/history" ;

  
    console.log(rollTypeIn);
    console.log(rollTypeOut);
    console.log(rollTypeOutPlace);
  
    useEffect(() => {
      axios.get(totalListLink)
        .then((response) => {
          setTotalList(response.data); 
          console.log(response);
        })
        .catch((err) => console.log(err));


        axios.get(checkListLink)
        .then((response) => {
          setCheckList(response.data); 
          console.log(response);
        })
        .catch((err) => console.log(err));
  
        axios.get(historyListLink)
        .then((response) => {
          setHistoryList(response.data); 
          console.log(response);
        })
        .catch((err) => console.log(err));
  
       
  
  
    }, [page]);
  
  
  
  
    const HandleOut = () => {
      setpage((p) => {
        return "out";
      });
  
    };
  
    const HandleIn = () => {
      setpage((p) => {
        return "in";
      });
    };
  
    const HandleList = () => {
      setpage((p) => {
        return "list";
      });
    };
  
    const HandleCheck = () => {
      setpage((p) => {
        return "check";
      });
    };
  
    const HandleHistory = () => {
      setpage((p) => {
        return "history";
      });
    };
  
    const BackBtn = () => {
      setpage((p) => {
        return "buttons";
      });
    };
  
  
    const handleWarning = (msg) => {
      toast(`${msg}`, {
        icon: '⚠️', // Warning icon
        style: {
          background: '#ff9800', // Orange background for the warning
          color: '#fff', // White text
        },
        duration: 4000,
        position: 'top-right',
      });
    };
  
  
  
    const sendHomeToCollege = ()=>
    {
      axios
        .put(`${inSendingLink}${rollTypeIn}`,{ place: rollTypeOutPlace })
        .then((response) => {
  
          const status = response.data.status;
          const msg = response.data.msg;
  
          if(status=='war')
          {
            handleWarning(msg);
          }
  
          else if(status===true)
          {
            toast.success(`${msg}`, {
              position: "top-right", 
            });
          }
  
          else if(status===false) {
  
            toast.error(`${msg}`, {
              position: "top-right", 
            });
  
          }
  
          else{
  
            toast.error(`${msg}`, {
              position: "top-right", 
            });
  
          }
  
          console.log("Response:", response.data.status);
        })
        .catch((err) => {
          toast.error("Network Error", {
            position: "top-right",
          });
        });
  
    }
  
    const sendCollegeToHome = () => {
      axios
        .get(`${outSendingLink}${rollTypeOut}`)
        .then((response) => {
  
  
          const status = response.data.status;
          const msg = response.data.msg;
  
          if(status=='war')
          {
            handleWarning(msg);
          }
  
          else if(status===true)
          {
            toast.success(`${msg}`, {
              position: "top-right", 
            });
          }
          
          else if(status===false) {
  
            toast.error(`${msg}`, {
              position: "top-right", 
            });
  
          }
  
          else{
  
            toast.error(`${msg}`, {
              position: "top-right", 
            });
  
          }
  
          console.log("Response:", response.data.status);
        })
        .catch((err) => {
  
          toast.error("Network Error", {
            position: "top-right",
          });
          console.error("Error:", err);
        });
    };
    
  
    return (
      <div>
        <div className="MainBody">
          <p className="Heading">{pageHeading}</p>
          {page === "buttons" && (
            <div className="ButtonsBox">
              <button onClick={HandleList} className="List buttonsbtn">
                {ListBtn}
              </button>
  
              <button onClick={HandleOut} className="Out buttonsbtn">
                {OutBtn}
              </button>
  
              <button onClick={HandleIn} className="In buttonsbtn">
               {InBtn}
              </button>
  
              <button onClick={HandleCheck} className="Check buttonsbtn">
                {CheckBtn}
              </button>
  
              <button onClick={HandleHistory} className="History buttonsbtn">
                {HistoryBtn}
              </button>
            </div>
          )}
  
          {page === "list" && (
            <div className="TheBoxs">
              <p className="BoxSubHead" >{subListHead}</p>
              <button onClick={BackBtn} className="BacksBtn">
              <div className="line1"></div>
              <div className="line2"></div>
              </button>
              <div className="ListTable">
  
                <Tablet name={totalList}/>
  
              </div>
            </div>
          )}
  
          
  
          {page === "out" && (
            <div className="TheBoxs">
            <p className="BoxSubHead" >{subOutHead}</p>
            <div className="OutPage">
              <button onClick={BackBtn} className="OutBackBtn">
                <div className="line1"></div>
                <div className="line2"></div>
              </button>
              <label className="OutLabel1" htmlFor="">Boy Student Roll</label>
              <input className="OutInputBox"   type="text" value={rollTypeOut}  onChange={(e) => setRollTypeOut(e.target.value)} />
  
              <button className="SubmitBtn" type="submit" onClick={sendCollegeToHome} >send out</button>
            </div>
            </div>
          )}
  
          {page === "in" && (
            <div className="TheBoxs">
            <p className="BoxSubHead" >{subInHead}</p>
            <div className="InPage">
              <button onClick={BackBtn} className="InBackBtn">
              <div className="line1"></div>
              <div className="line2"></div>
              </button>
              <label className="InLabel" htmlFor="">Boy Student Roll</label>
              <input
                  className="InInputBox"
                  type="text"
                  value={rollTypeIn}
                  onChange={(e) => setRollTypeIn(e.target.value)}
                />

                <label className="InLabel2" htmlFor="">Visitor Name</label>
                <input className="InInputBox"  type="text"  value={rollTypeOutPlace}  onChange={(e) => setRollTypeOutPlace(e.target.value)} />

                <button onClick={sendHomeToCollege} className="SubmitBtn" type="submit">
                  send in
                </button>
            </div>
            </div>
          )}
  
          {page === "check" && (
            <div className="TheBoxs">
              <p className="BoxSubHead" >{subCheckHead}</p>
              <button onClick={BackBtn} className="BacksBtn">
              <div className="line1"></div>
              <div className="line2"></div>
              </button>
              <div className="ListTable">
  
                <Tablet name={checkList}/>
  
              </div>
            </div>
          )}
          {page === "history" && (
            <div className="TheBoxs">
              <p className="BoxSubHead" >{subHistoryHead}</p>
              <button onClick={BackBtn} className="BacksBtn">
              <div className="line1"></div>
              <div className="line2"></div>
              </button>
              <div className="ListTable">
  
                <Tablet name={historyList}/>
  
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default AllRouts
