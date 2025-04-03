import React from 'react'
import "./ButtonsPage.css";

function ButtonsPage({ListBtn,OutBtn,InBtn,CheckBtn,HistoryBtn,HandleList,HandleOut,HandleIn,HandleCheck,HandleHistory}) {





  return (
    <div className="ButtonsBox" style={{position:'absolute',top:'60%',left:'50%',transform :"translate(-50%,-50%)"}}>
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
  )
}

export default ButtonsPage
