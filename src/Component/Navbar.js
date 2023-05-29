import React, { useEffect, useRef, useState } from "react";
import "../Styling/Nav.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  return (
    <div>
      <div className="container">
        <div className="heading">
          <p>Digital Marketing Agency - Grow Revenue with Us</p>
          <div className="contact-link">
            <a>
              <i className="fa-solid fa-phone"></i>
            </a>
            <a>
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <nav ref={headerRef} className={stickyClass}>
          <div className="logo">
            <h1>Webreate</h1>
          </div>
          <div className="openMenu">
            <i className="fa fa-bars" onClick={() => setOpen(true)}></i>
          </div>
          {open && (
            <ul className="mainMenu">
              <div className="logo">Webreate</div>
              <h3>Company</h3>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <h3>Services</h3>
              <li>
                <a href="#">Creation</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Management</a>
              </li>
              <li>
                <a href="#">Optimization</a>
              </li>
              <h3>Work</h3>
              <li>
                <a href="#">Celeberate</a>
              </li>
              <li>
                <a href="#">Mehandi Hub</a>
              </li>
              <li>
                <a href="#">Easy CamScan</a>
              </li>
              <li>
                <a href="#">Riyo</a>
              </li>
              <span className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-github"></i>
              </span>
              <div className="closeMenu">
                <i className="fa fa-times" onClick={() => setOpen(false)}></i>
              </div>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
