import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../CustomHook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(user?.photoURL || "Not available");

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
          to="/my-reviews"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          My Reviews
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
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md px-4 py-3 md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex list-none space-x-6">{links}</div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="menu bg-white shadow-lg rounded-md p-4 mt-3 space-y-3">
          {links}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <button
              className="btn btn-error text-text rounded-md"
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
            <Link to="/login" className="btn text-text bg-primary">
              Login
            </Link>
            <Link to="/register" className="btn text-text bg-secondary">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
