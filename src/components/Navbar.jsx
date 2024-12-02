import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container w-50">
        <Link className="link navbar-brand text-primary" to="/">
          Password App
        </Link>
        <Link className="link navbar-brand text-primary" to="/my-all-passwords">
          Saved Passwords
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
