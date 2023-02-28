import React, { useState } from "react";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import DatiPersonali from "../DatiPersonali";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function userName(e) {
    const newValue = e.target.value;
    setUname(newValue);
  }

  function Password(e) {
    const newValue = e.target.value;
    setPass(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = DatiPersonali.find(userItem => userItem.username === uname && userItem.password === pass)
    
    if (user) {
      navigate(`/interno/${user.id}`);
    }
    else {
      alert("WRONG!");
    }
  }

  return <div>
    <NavBar />
    <Welcome />
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="row username-div">
          <label for='username' className="username">Username</label>
          <input type="text" placeholder="Inserire Username" name="username" required onChange={userName} />
        </div>
        <div className="row password-div">
          <label for='passwprd' className="password">Password</label>
          <input type="password" placeholder="Inserire Password" name="password" required onChange={Password} />
        </div>
        <button>Accedi</button>
      </form>
    </div>
  </div>
}

export default LogInPage;