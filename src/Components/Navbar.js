import React, { useState } from "react";
import { logoURL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
export default function Navbar() {
  const [login, setLogin] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  function changeButtonText() {
    if (login === "Login") setLogin("Logout");
    else setLogin("Login");
  }
  return (
    <div className="header">
      <div className="logo">
        <img src={logoURL} alt="" className="logoimage" />
      </div>
      <div className="navbar">
        <ul className="navbarlist">
          <li className="navbarli">
            Online Status: {OnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="navbarli">
            <Link to="/">Home</Link>
          </li>
          <li className="navbarli">
            <Link to="/about">About</Link>
          </li>
          <li className="navbarli">Contact us</li>
          <li className="navbarli">Cart</li>
          <li className="navbarli">
            <button className="btn" onClick={changeButtonText}>
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
