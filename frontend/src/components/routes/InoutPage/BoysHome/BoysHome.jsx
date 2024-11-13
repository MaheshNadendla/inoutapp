import React, { useState,useEffect } from "react";
import "./BoysHome.css";
import axios from "axios";

import toast from "react-hot-toast";

function BoysHome() {
  const [users, setUsers] = useState([]); 
  const [page, setpage] = useState("out");



  const [homeToIn, setHomeToIn] = useState("");

  const [InToHomeRoll, setInToHomeRoll] = useState("");
  const [InToHomePlace,setInToHomePlace] = useState("");

  console.log(homeToIn);
  console.log(InToHomeRoll);
  console.log(InToHomePlace);

  useEffect(() => {
    axios.get("http://localhost:8080/totalboys/")
      .then((response) => {
        setUsers(response.data); 
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);




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
      .put(`http://localhost:8080/boysin/${homeToIn}`,homeToIn)
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
      .put(`http://localhost:8080/boyshomes/${InToHomeRoll}`, { place: InToHomePlace })
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
        <p className="Heading">Boys Home</p>
        {page === "buttons" && (
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

        {page === "list" && (
          <div className="">
            <button onClick={BackBtn} className="InBackBtn">
              X
            </button>
            <div className="ListTable">

                <table className='MainTable' border={1}>
                  <thead className="TableHeading">
                      <tr className="TableHead">
                          <th>Name</th>
                          <th>Roll</th>
                          <th>phone</th>
                          <th>place</th>
                          <th>outtime</th>
                          <th>intime</th>
                      </tr>
                  </thead>

          

          <tbody>
            {users.length > 0 ? (
              users.map((user,index) => (
                <tr key={index+1}>
                  <td>{index + 1}</td>
                  <td>{user.roll}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.intime}</td>
                  <td>{user.outtime}</td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
       



                  
              </table>

            </div>
          </div>
        )}

        

        {page === "out" && (
          <div className="OutPage">
            <button onClick={BackBtn} className="OutBackBtn">
              <div className="line1"></div>
              <div className="line2"></div>
            </button>
            <label className="OutLabel1" htmlFor="">Boy Student Roll</label>
            <input className="OutInputBox"   type="text" value={InToHomeRoll}  onChange={(e) => setInToHomeRoll(e.target.value)} />

            <label className="OutLabel2" htmlFor="">Outing Place Name</label>
            <input className="OutInputBox"  type="text"  value={InToHomePlace}  onChange={(e) => setInToHomePlace(e.target.value)} />

            <button className="SubmitBtn" type="submit" onClick={sendCollegeToHome} >send out</button>
          </div>
        )}

        {page === "in" && (
          <div className="InPage">
            <button onClick={BackBtn} className="InBackBtn">
            <div className="line1"></div>
            <div className="line2"></div>
            </button>
            <label className="InLabel" htmlFor="">Boy Student Roll</label>
            <input
                className="InInputBox"
                type="text"
                value={homeToIn}
                onChange={(e) => setHomeToIn(e.target.value)}
              />
              <button onClick={sendHomeToCollege} className="SubmitBtn" type="submit">
                send in
              </button>
          </div>
        )}

        {page === "check" && (
          <div className="">
            <button onClick={BackBtn} className="InBackBtn">
              X
            </button>
            <div className="ListTable">

                <table>
                  <thead className="TableHeading">
                      <tr className="TableHead">
                          <th>Name</th>
                          <th>Roll</th>
                          <th>phone</th>
                          <th>place</th>
                          <th>outtime</th>
                          <th>intime</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Row 1, Cell 1</td>
                          <td>Row 1, Cell 2</td>
                          <td>Row 1, Cell 3</td>
                          <td>Row 1, Cell 1</td>
                          <td>Row 1, Cell 2</td>
                          <td>Row 1, Cell 3</td>
                      </tr>
                      <tr>
                          <td>Row 2, Cell 1</td>
                          <td>Row 2, Cell 2</td>
                          <td>Row 2, Cell 3</td>
                          <td>Row 2, Cell 1</td>
                          <td>Row 2, Cell 2</td>
                          <td>Row 2, Cell 3</td>
                      </tr>
                      <tr>
                          <td>Row 3, Cell 1</td>
                          <td>Row 3, Cell 2</td>
                          <td>Row 3, Cell 3</td>
                          <td>Row 3, Cell 1</td>
                          <td>Row 3, Cell 2</td>
                          <td>Row 3, Cell 3</td>
                      </tr>

              
                      
                  </tbody>
              </table>

            </div>
          </div>
        )}
        {page === "history" && (
          <div className="">
            <button onClick={BackBtn} className="InBackBtn">
              X
            </button>
            <div className="ListTable">

                <table>
                  <thead className="TableHeading">
                      <tr className="TableHead">
                          <th>Name</th>
                          <th>Roll</th>
                          <th>phone</th>
                          <th>place</th>
                          <th>outtime</th>
                          <th>intime</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Row 1, Cell 1</td>
                          <td>Row 1, Cell 2</td>
                          <td>Row 1, Cell 3</td>
                          <td>Row 1, Cell 1</td>
                          <td>Row 1, Cell 2</td>
                          <td>Row 1, Cell 3</td>
                      </tr>
                      <tr>
                          <td>Row 2, Cell 1</td>
                          <td>Row 2, Cell 2</td>
                          <td>Row 2, Cell 3</td>
                          <td>Row 2, Cell 1</td>
                          <td>Row 2, Cell 2</td>
                          <td>Row 2, Cell 3</td>
                      </tr>
                      <tr>
                          <td>Row 3, Cell 1</td>
                          <td>Row 3, Cell 2</td>
                          <td>Row 3, Cell 3</td>
                          <td>Row 3, Cell 1</td>
                          <td>Row 3, Cell 2</td>
                          <td>Row 3, Cell 3</td>
                      </tr>

              
                      
                  </tbody>
              </table>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoysHome;
