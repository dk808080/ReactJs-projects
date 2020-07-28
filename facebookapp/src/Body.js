import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./body.css";

function Body() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function signup() {
    alert("signedup successfully");
    window.location.reload(true);
  }

  function registeruser(event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var newuser = {
      name: name,
      username: username,
      password: password,
    };
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
  }
  return (
    <div className="row body justify-content-center">
      <div className="col-md-6">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png"
          alt="fb-img"
        />
      </div>
      <div className="col-md-4">
        <form onSubmit={registeruser}>
          <h1>Registration form</h1>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input
            type="submit"
            value="SignUp"
            className="btn btn-primary"
            onClick={signup}
          />
        </form>
      </div>
    </div>
  );
}
export default Body;
