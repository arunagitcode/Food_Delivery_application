import { useState } from "react";
import { LOGO_URL } from "../utils/Logos";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  return (
    <div className="header_container">
      <div className="logo">
        <img src={LOGO_URL} height="96px"></img>
      </div>
      <div className="text_container">SPICY FOOD</div>
      <div className="nav_container">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/order">Order</Link>
          <Link to="/contactus">ContactUs</Link>
          <li className="login_btn">
            <button
              onClick={() => {
                loginbtn === "Login"
                  ? setLoginBtn("LogOut")
                  : setLoginBtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
