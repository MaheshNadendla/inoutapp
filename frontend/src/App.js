import "./App.css";


// import { Navigate, Route, Routes } from "react-router-dom";

// import Login from "./components/routes/LoginRouter/Login";

// import Signup from "./components/routes/SignupRouter/Signup";
import Inout from "./components/routes/InoutPage/Inout";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={< Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes> */}

        <Inout/>


        

    </div>
  );
}

export default App;
