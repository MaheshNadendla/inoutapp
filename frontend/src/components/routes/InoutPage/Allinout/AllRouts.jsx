// import React, { useState,useEffect } from "react";
// import './AllRouts.css';
// import axios from "axios";
// import toast from "react-hot-toast";
// import Tablet from "../Tablet";
// import ButtonsPage from "./ButtonsPage";
// import ListPage from "./ListPage";
// import OutPage from "./OutPage";
// import InPage from "./InPage";
// import CheckPage from "./CheckPage";
// import HistoryPage from "./HistoryPage";

// function AllRouts({ 

//             pageHeading : pageHeading,

//             ListBtn : ListBtn,
//             OutBtn : OutBtn,
//             InBtn  : InBtn,
//             CheckBtn : CheckBtn,
//             HistoryBtn : HistoryBtn,

//             subListHead : subListHead,
//             subOutHead  : subOutHead,
//             subInHead : subInHead,
//             subCheckHead : subCheckHead,
//             subHistoryHead : subHistoryHead,

//             totalListLink : totalListLink,
//             outSendingLink : outSendingLink,
//             inSendingLink : inSendingLink,
//             checkListLink : checkListLink,
//             historyListLink : historyListLink

// }) {



//     //two sates :
//     // 1) incollege : inhome/outing
//     // * totalPage => 

//             // *heading => {pageHeading} 
//             //  1) List{ListBtn,subListHead,[totalList,setTotalList],totalListLink} , 
//             //  2) Out{OutBtn,subOutHead,[rollTypeOut,setRollTypeOut],[rollTypeOutPlace,setRollTypeOutPlace],sendTypeOutBtn,outSendingLink} , 
//             //  3) In{InBtn,subInHead,[rollTypeIn,setRollTypeIn],sendTypeInBtn,inSendingLink} ,
//             //  4) Check{CheckBtn,subCheckHead,[checkList,setCheckList],checkListLink} , 
//             //  5) History{HistoryBtn,subHistoryHead,[historyList,setHistoryList],historyListLink},


//     //heading
//     // const pageHeading = "Boys Home";


//     //page

//     const [page, setpage] = useState("buttons");

//     // const ListBtn = "List" ;

//     // const OutBtn = "Out" ;

//     // const InBtn = "In" ;

//     // const CheckBtn = "Check" ;

//     // const HistoryBtn = "History" ;

//     //List

//     // const subListHead  = "" ;
//     const [totalList, setTotalList] = useState([]); 
//     // const totalListLink  = "http://localhost:8080/totalboys/" ;



//     //Out

//     // const subOutHead  = "" ;
//     const [rollTypeOut, setRollTypeOut] = useState("");
//     const [rollTypeOutPlace,setRollTypeOutPlace] = useState("");
//     // const outSendingLink  = "http://localhost:8080/boyshomes/" ;

//     //In

//     // const subInHead  = "" ;
//     const [rollTypeIn, setRollTypeIn] = useState("");
//     // const inSendingLink = "http://localhost:8080/boysin/" ;

//     //check 

//     // const subCheckHead  = "" ;
//     const [checkList, setCheckList] = useState([]); 
//     // const checkListLink  = "http://localhost:8080/boyshomes/" ;

//     //History

//     // const subHistoryHead  = "" ;
//     const [historyList, setHistoryList ] = useState([]); 
//     // const historyListLink  = "http://localhost:8080/boyshomes/history" ;

  
//     console.log(rollTypeIn);
//     console.log(rollTypeOut);
//     console.log(rollTypeOutPlace);
  
//     useEffect(() => {
//       axios.get(totalListLink)
//         .then((response) => {
//           setTotalList(response.data); 
//           console.log(response);
//         })
//         .catch((err) => console.log(err));


//         axios.get(checkListLink)
//         .then((response) => {
//           setCheckList(response.data); 
//           console.log(response);
//         })
//         .catch((err) => console.log(err));
  
//         axios.get(historyListLink)
//         .then((response) => {
//           setHistoryList(response.data); 
//           console.log(response);
//         })
//         .catch((err) => console.log(err));
  
       
  
  
//     }, [page]);
  
  
  
  
//     const HandleOut = () => {
//       setpage((p) => {
//         return "out";
//       });
  
//     };
  
//     const HandleIn = () => {
//       setpage((p) => {
//         return "in";
//       });
//     };
  
//     const HandleList = () => {
//       setpage((p) => {
//         return "list";
//       });
//     };
  
//     const HandleCheck = () => {
//       setpage((p) => {
//         return "check";
//       });
//     };
  
//     const HandleHistory = () => {
//       setpage((p) => {
//         return "history";
//       });
//     };
  
//     const BackBtn = () => {
//       setpage((p) => {
//         return "buttons";
//       });
//     };
  
  
//     const handleWarning = (msg) => {
//       toast(`${msg}`, {
//         icon: '⚠️', // Warning icon
//         style: {
//           background: '#ff9800', // Orange background for the warning
//           color: '#fff', // White text
//         },
//         duration: 4000,
//         position: 'top-right',
//       });
//     };
  
  
  
//     const sendHomeToCollege = ()=>
//     {
//       axios
//         .put(`${inSendingLink}${rollTypeIn}`,rollTypeIn)
//         .then((response) => {
  
//           const status = response.data.status;
//           const msg = response.data.msg;
  
//           if(status=='war')
//           {
//             handleWarning(msg);
//           }
  
//           else if(status===true)
//           {
//             toast.success(`${msg}`, {
//               position: "top-right", 
//             });
//           }
  
//           else if(status===false) {
  
//             toast.error(`${msg}`, {
//               position: "top-right", 
//             });
  
//           }
  
//           else{
  
//             toast.error(`${msg}`, {
//               position: "top-right", 
//             });
  
//           }
  
//           console.log("Response:", response.data.status);
//         })
//         .catch((err) => {
//           toast.error("Network Error", {
//             position: "top-right",
//           });
//         });
  
//     }
  
//     const sendCollegeToHome = () => {
//       axios
//         .put(`${outSendingLink}${rollTypeOut}`, { place: rollTypeOutPlace })
//         .then((response) => {
  
  
//           const status = response.data.status;
//           const msg = response.data.msg;
  
//           if(status=='war')
//           {
//             handleWarning(msg);
//           }
  
//           else if(status===true)
//           {
//             toast.success(`${msg}`, {
//               position: "top-right", 
//             });
//           }
          
//           else if(status===false) {
  
//             toast.error(`${msg}`, {
//               position: "top-right", 
//             });
  
//           }
  
//           else{
  
//             toast.error(`${msg}`, {
//               position: "top-right", 
//             });
  
//           }
  
//           console.log("Response:", response.data.status);
//         })
//         .catch((err) => {
  
//           toast.error("Network Error", {
//             position: "top-right",
//           });
//           console.error("Error:", err);
//         });
//     };
    
  
//     return (
//       <div>
//         <div className="MainBody">
//           <p className="Heading">{pageHeading}</p>
//           {page === "buttons" && (

//               <ButtonsPage
              
//                 ListBtn={ListBtn}
//                 OutBtn={OutBtn}
//                 InBtn={InBtn}
//                 CheckBtn={CheckBtn}
//                 HistoryBtn={HistoryBtn}
//                 HandleList={HandleList}
//                 HandleOut={HandleOut}
//                 HandleIn={HandleIn}
//                 HandleCheck={HandleCheck}
//                 HandleHistory={HandleHistory}
              
//               />

//           )}
  
//           {page === "list" && (

//             <ListPage
//               subListHead ={subInHead}
//               totalList = {totalList}
//               BackBtn = {BackBtn}
//             />

//           )}
  
          
  
//           {page === "out" && (
             
//              <OutPage

//              subOutHead= {subOutHead} 
//              BackBtn ={BackBtn}
//              rollTypeOut ={rollTypeOut}
//              rollTypeOutPlace = {rollTypeOutPlace}
//              sendCollegeToHome = {sendCollegeToHome}
//              setRollTypeOut = {setRollTypeOut}
//              setRollTypeOutPlace = {setRollTypeOutPlace}

//              />
//           )}
  
//           {page === "in" && (
            
//             <InPage 

//               subInHead={subInHead}
//               BackBtn={BackBtn}
//               rollTypeIn={rollTypeIn}
//               setRollTypeIn={setRollTypeIn}
//               sendHomeToCollege={sendHomeToCollege}
            
//             />

//           )}
  
//           {page === "check" && (
//             <CheckPage 
//               subCheckHead={subCheckHead}
//               BackBtn={BackBtn}
//               checkList={checkList}
//             />
//           )}
//           {page === "history" && (
            
//             <HistoryPage
//               subHistoryHead={subHistoryHead}
//               BackBtn={BackBtn}
//               historyList={historyList}
//             />

//           )}
//         </div>
//       </div>
//     );
// }

// export default AllRouts










// import React, { useState, useEffect } from "react";
// import "./AllRouts.css";
// import axios from "axios";
// import toast from "react-hot-toast";
// import ButtonsPage from "./ButtonsPage";
// import ListPage from "./ListPage";
// import OutPage from "./OutPage";
// import InPage from "./InPage";
// import CheckPage from "./CheckPage";
// import HistoryPage from "./HistoryPage";

// function AllRouts({
//   pageHeading,
//   ListBtn,
//   OutBtn,
//   InBtn,
//   CheckBtn,
//   HistoryBtn,
//   subListHead,
//   subOutHead,
//   subInHead,
//   subCheckHead,
//   subHistoryHead,
//   totalListLink,
//   outSendingLink,
//   inSendingLink,
//   checkListLink,
//   historyListLink,
// }) {
//   const [page, setPage] = useState("buttons");

//   // State variables
//   const [totalList, setTotalList] = useState([]);
//   const [rollTypeOut, setRollTypeOut] = useState("");
//   const [rollTypeOutPlace, setRollTypeOutPlace] = useState("");
//   const [rollTypeIn, setRollTypeIn] = useState("");
//   const [checkList, setCheckList] = useState([]);
//   const [historyList, setHistoryList] = useState([]);

//   console.log(rollTypeIn, rollTypeOut, rollTypeOutPlace);

//   // Fetch Data
//   const fetchData = async () => {
//     try {
//       const [totalRes, checkRes, historyRes] = await Promise.all([
//         axios.get(totalListLink),
//         axios.get(checkListLink),
//         axios.get(historyListLink),
//       ]);

//       setTotalList(totalRes.data);
//       setCheckList(checkRes.data);
//       setHistoryList(historyRes.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   // Page Handlers
//   const setPageHandler = (newPage) => setPage(newPage);

//   // Warning Toast
//   const handleWarning = (msg) => {
//     toast(`${msg}`, {
//       icon: "⚠️",
//       style: { background: "#ff9800", color: "#fff" },
//       duration: 4000,
//       position: "top-right",
//     });
//   };

//   // API Request: Home to College
//   const sendHomeToCollege = async () => {
//     try {
//       const response = await axios.put(`${inSendingLink}${rollTypeIn}`, rollTypeIn);
//       const { status, msg } = response.data;

//       if (status === "war") handleWarning(msg);
//       else toast[status ? "success" : "error"](msg, { position: "top-right" });

//       console.log("Response:", status);
//     } catch (err) {
//       toast.error("Network Error", { position: "top-right" });
//     }
//   };

//   // API Request: College to Home
//   const sendCollegeToHome = async () => {
//     try {
//       const response = await axios.put(`${outSendingLink}${rollTypeOut}`, { place: rollTypeOutPlace });
//       const { status, msg } = response.data;

//       if (status === "war") handleWarning(msg);
//       else toast[status ? "success" : "error"](msg, { position: "top-right" });

//       console.log("Response:", status);
//     } catch (err) {
//       toast.error("Network Error", { position: "top-right" });
//     }
//   };

//   return (
//     <div>
//       <div className="MainBody">
//         <p className="Heading">{pageHeading}</p>

//         {page === "buttons" && (
//           <ButtonsPage
//             ListBtn={ListBtn}
//             OutBtn={OutBtn}
//             InBtn={InBtn}
//             CheckBtn={CheckBtn}
//             HistoryBtn={HistoryBtn}
//             HandleList={() => setPageHandler("list")}
//             HandleOut={() => setPageHandler("out")}
//             HandleIn={() => setPageHandler("in")}
//             HandleCheck={() => setPageHandler("check")}
//             HandleHistory={() => setPageHandler("history")}
//           />
//         )}

//         {page === "list" && <ListPage subListHead={subListHead} totalList={totalList} BackBtn={() => setPageHandler("buttons")} />}

//         {page === "out" && (
//           <OutPage
//             subOutHead={subOutHead}
//             BackBtn={() => setPageHandler("buttons")}
//             rollTypeOut={rollTypeOut}
//             setRollTypeOut={setRollTypeOut}
//             rollTypeOutPlace={rollTypeOutPlace}
//             setRollTypeOutPlace={setRollTypeOutPlace}
//             sendCollegeToHome={sendCollegeToHome}
//           />
//         )}

//         {page === "in" && (
//           <InPage
//             subInHead={subInHead}
//             BackBtn={() => setPageHandler("buttons")}
//             rollTypeIn={rollTypeIn}
//             setRollTypeIn={setRollTypeIn}
//             sendHomeToCollege={sendHomeToCollege}
//           />
//         )}

//         {page === "check" && <CheckPage subCheckHead={subCheckHead} checkList={checkList} BackBtn={() => setPageHandler("buttons")} />}

//         {page === "history" && <HistoryPage subHistoryHead={subHistoryHead} historyList={historyList} BackBtn={() => setPageHandler("buttons")} />}
//       </div>
//     </div>
//   );
// }

// export default AllRouts;



import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import axios from "axios";
import toast from "react-hot-toast";
import ButtonsPage from "./ButtonsPage";
import ListPage from "./ListPage";
import OutPage from "./OutPage";
import InPage from "./InPage";
import CheckPage from "./CheckPage";
import HistoryPage from "./HistoryPage";

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "md",
  margin: "auto",
  padding: theme.spacing(2),
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

function AllRouts({
  pageHeading,
  ListBtn,
  OutBtn,
  InBtn,
  CheckBtn,
  HistoryBtn,
  subListHead,
  subOutHead,
  subInHead,
  subCheckHead,
  subHistoryHead,
  totalListLink,
  outSendingLink,
  inSendingLink,
  checkListLink,
  historyListLink,
}) {
  const theme = useTheme();
  const [page, setPage] = useState("buttons");

  // State variables
  const [totalList, setTotalList] = useState([]);
  const [rollTypeOut, setRollTypeOut] = useState("");
  const [rollTypeOutPlace, setRollTypeOutPlace] = useState("");
  const [rollTypeIn, setRollTypeIn] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  // Fetch Data
  const fetchData = async () => {
    try {
      const [totalRes, checkRes, historyRes] = await Promise.all([
        axios.get(totalListLink),
        axios.get(checkListLink),
        axios.get(historyListLink),
      ]);

      setTotalList(totalRes.data);
      setCheckList(checkRes.data);
      setHistoryList(historyRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Page Handlers
  const setPageHandler = (newPage) => setPage(newPage);

  // Warning Toast
  const handleWarning = (msg) => {
    toast(`${msg}`, {
      icon: "⚠️",
      style: { background: "#ff9800", color: "#fff" },
      duration: 4000,
      position: "top-right",
    });
  };

  // API Request: Home to College
  const sendHomeToCollege = async () => {
    try {
      const response = await axios.put(`${inSendingLink}${rollTypeIn}`, rollTypeIn);
      const { status, msg } = response.data;

      if (status === "war") handleWarning(msg);
      else toast[status ? "success" : "error"](msg, { position: "top-right" });
    } catch (err) {
      toast.error("Network Error", { position: "top-right" });
    }
  };

  // API Request: College to Home
  const sendCollegeToHome = async () => {
    try {
      const response = await axios.put(`${outSendingLink}${rollTypeOut}`, { place: rollTypeOutPlace });
      const { status, msg } = response.data;

      if (status === "war") handleWarning(msg);
      else toast[status ? "success" : "error"](msg, { position: "top-right" });
    } catch (err) {
      toast.error("Network Error", { position: "top-right" });
    }
  };

  return (




    

    
    


    
    

    <>
      <StyledHeading sx={{background: '#ffffff11',color:'#ffffffcc',paddingBlock:'0.5em',paddingInline:'1em', position:'absolute',top:'18%',left:'50%',transform :"translate(-50%,-50%)",borderTopLeftRadius:'25%',borderBottomRightRadius:'25%',border:'1px solid rgba(255, 255, 255, 0.20)',boxShadow:'-2px 2px 10px black',textTransform: 'uppercase'}} >{pageHeading}</StyledHeading>

      {page === "buttons" && (
        <ButtonsPage
          ListBtn={ListBtn}
          OutBtn={OutBtn}
          InBtn={InBtn}
          CheckBtn={CheckBtn}
          HistoryBtn={HistoryBtn}
          HandleList={() => setPageHandler("list")}
          HandleOut={() => setPageHandler("out")}
          HandleIn={() => setPageHandler("in")}
          HandleCheck={() => setPageHandler("check")}
          HandleHistory={() => setPageHandler("history")}
        />
      )}

      {page === "list" && <ListPage subListHead={subListHead} totalList={totalList} BackBtn={() => setPageHandler("buttons")} />}

      {page === "out" && (
        <OutPage 
          subOutHead={subOutHead}
          BackBtn={() => setPageHandler("buttons")}
          rollTypeOut={rollTypeOut}
          setRollTypeOut={setRollTypeOut}
          rollTypeOutPlace={rollTypeOutPlace}
          setRollTypeOutPlace={setRollTypeOutPlace}
          sendCollegeToHome={sendCollegeToHome}
        />
      )}

      {page === "in" && (
        <InPage
          subInHead={subInHead}
          BackBtn={() => setPageHandler("buttons")}
          rollTypeIn={rollTypeIn}
          setRollTypeIn={setRollTypeIn}
          sendHomeToCollege={sendHomeToCollege}
        />
      )}

      {page === "check" && <CheckPage subCheckHead={subCheckHead} checkList={checkList} BackBtn={() => setPageHandler("buttons")} />}

      {page === "history" && <HistoryPage subHistoryHead={subHistoryHead} historyList={historyList} BackBtn={() => setPageHandler("buttons")} />}
    </>
  );
}

export default AllRouts;
