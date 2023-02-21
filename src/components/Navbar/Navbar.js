import "./Navbar.scss";
import logo from "./logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="110px;" />
      </div>
      <div className="link">
        <a href="#horoscope">Horoscopes</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
