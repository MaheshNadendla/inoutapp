import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    if (!name || !email || !password) {
      console.log("error");
    }

    try {
        const url = "http://localhost:8080/auth/signup";
        const response = await fetch(url , {
          method : "POST",
          headers : {

            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(user)
        });
        const result = await response.json();
        console.log("sucess",result);
    } catch (error) {
        console.log("error here");
    }

  };

  console.log(user);

  return (
    <>
      <div className="SignUpBox">
        <label className="SignUp">Sign Up</label>

        <label htmlFor="">UserName</label>
        <input
          value={user.name}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <label htmlFor="">Email</label>
        <input
          value={user.email}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <label htmlFor="">Password</label>
        <input
          value={user.password}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <button onClick={handleSignup} >Submit</button>
      </div>
    </>
  );
}

export default Signup;
