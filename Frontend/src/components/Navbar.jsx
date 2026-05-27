import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/KrishiSakhiLogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLink = (path) =>
    `cursor-pointer ${
      location.pathname === path
        ? "text-yellow-300 font-semibold"
        : "hover:text-green-200"
    }`;

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO + TITLE */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Krishi Sakhi"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Krishi Sakhi</h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className={navLink("/")}>Home</Link>
          <Link to="/about" className={navLink("/about")}>GovSchema</Link>
          <Link to="/features" className={navLink("/features")}>Features</Link>
          <Link to="/dashboard" className={navLink("/dashboard")}>Dashboard</Link>
          <Link to="/contact" className={navLink("/contact")}>Contact</Link>

          {/* GET STARTED BUTTON */}
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
