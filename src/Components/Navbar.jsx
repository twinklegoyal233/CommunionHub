import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import NavLink from "./Navlink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0, display: "block" },
        { y: -25, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="container">
      <nav className="flex justify-between py-3.5 px-4 items-center">
        <Link to="/">
          <img
            className="h-6 md:h-8 max-w-full"
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="communion hub logo"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 transition-transform duration-300 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-8 flex-1 justify-end">
          <NavLink to="/" label="Home" />
          <NavLink to="/events" label="Events" />
          <NavLink label="About" />
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden bg-white p-4 absolute top-20 left-0 w-full z-10"
        style={{ display: "none" }}
      >
        <div className="flex flex-col items-center gap-4">
          <Link
            className="text-14  bg-gray-300 hover:bg-blue-800 cursor-pointer px-5 py-1 rounded-[37px] flex hover:gap-1 duration-300 ease-out hover:bg-primary hover:text-white gap-1 items-center group"
            to="/"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="text-14  bg-gray-300 hover:bg-blue-800 px-5 py-1 rounded-[37px] flex hover:gap-1 duration-300 ease-out hover:bg-primary hover:text-white gap-1 items-center group"
            to="/events"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            className="text-14  bg-gray-300 hover:bg-[#6366F1] px-5 py-1 rounded-[37px] flex hover:gap-1 duration-300 ease-out hover:bg-primary hover:text-white gap-1 items-center group"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
