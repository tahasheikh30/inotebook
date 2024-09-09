import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  React.useEffect(() => {
    // ga('send', 'pageview');
  }, [location]);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleSignoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* Left side: Brand and links */}
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <strong>{props.title}</strong>
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link button-special ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  to="/home"
                  style={{
                    color:
                      location.pathname === "/home"
                        ? props.mode === "dark"
                          ? "#fff"
                          : "#007bff" // Blue color for active link in light mode
                        : props.mode === "dark"
                        ? "#adb5bd"
                        : "#343a40", // Default text color for light mode
                    borderBottom:
                      location.pathname === "/home"
                        ? props.mode === "dark"
                          ? "2px solid #fff"
                          : "2px solid #007bff" // Blue underline in light mode
                        : "none", // No underline for non-active links
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link button-special ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                  style={{
                    color:
                      location.pathname === "/about"
                        ? props.mode === "dark"
                          ? "#fff"
                          : "#007bff" // Blue for active link in light mode
                        : props.mode === "dark"
                        ? "#adb5bd"
                        : "#343a40", // Default for light mode
                    borderBottom:
                      location.pathname === "/about"
                        ? props.mode === "dark"
                          ? "2px solid #fff"
                          : "2px solid #007bff" // Blue underline in light mode
                        : "none",
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side: Login, Sign up, and Dark Mode */}
          <div className="d-flex align-items-center">
            {!localStorage.getItem("token") ? (
              <div className="d-flex align-items-center">
                <button className={`button-auth`} onClick={handleSignupClick}>
                  Sign up
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>

                <button className={`button-auth`} onClick={handleLoginClick}>
                  Login
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            ) : (
              <button className={`button-auth`} onClick={handleSignoutClick}>
                Sign out
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            )}
            {/* Dark Mode Switch */}
            <div className="dark-mode-switch-container">
              <label className="switch">
                <input
                  type="checkbox"
                  className="dark-mode-switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <span className="slider"></span>
              </label>
              <label
                className="dark-mode-text"
                htmlFor="flexSwitchCheckDefault"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
