import { LOGO_URL } from "../utils/Logos";
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo">
        <img src={LOGO_URL} height="96px"></img>
      </div>
      <div className="text_container">SPICY FOOD</div>
      <div className="nav_container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Order</li>
            <li>Contact Us</li>
            <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
