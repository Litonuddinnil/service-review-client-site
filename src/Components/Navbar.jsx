import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../CustomHook/useAuth"; 
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [userPhoto, setUserPhoto] = useState(user?.photoURL || "Not available");
  const [theme, setTheme] = useState("wireframe"); 
  const toggleTheme = () => {
    const newTheme = theme === "wireframe" ? "black" : "wireframe";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
     
  };
  useEffect(() => {
    if (user?.photoURL) {
      setUserPhoto(user.photoURL);
    }
  }, [user]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Services
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-service"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-services"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-reviews"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              My Reviews
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/faqs"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          FAQs
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className={`sticky ${theme === "wireframe" ? "bg-background" : "bg-black"} top-0 z-50  shadow-md px-6 md:px-10 lg:px-16 py-3 flex justify-between items-center`}>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-primary flex items-center"
      >
        <img
          className="w-14 md:w-16 h-14 md:h-16 rounded-full"
          src="https://i.ibb.co/71k6Ny9/logo.png"
          alt="Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 list-none">{links}</div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-500 shadow-lg rounded-md p-4 md:hidden">
          <ul className="space-y-3">{links}</ul>
        </div>
      )}

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <button
              className="btn btn-error text-white rounded-md"
              onClick={logOut}
            >
              Logout
            </button>
            <div className="relative">
              <button
                className="btn btn-ghost btn-circle avatar"
                aria-label="User menu"
              >
                <div className="w-10 rounded-full overflow-hidden border border-gray-300">
                  <img
                    src={userPhoto}
                    alt="User"
                    className="object-cover w-full h-full"
                  />
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn bg-primary text-white">
              Login
            </Link>
            <Link to="/register" className="btn bg-secondary text-white">
              Register
            </Link>
          </>
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-error flex items-center ml-2"
        >
          {theme === "wireframe" ? <FaMoon /> : <FaSun />} 
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
