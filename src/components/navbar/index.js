import React from "react";
import { Link, Router } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="third-header-bg home-six-header">
      <div className="bg"></div>
      <div className="container custom-container">
        <div className="header-top-area t-header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-top-social">
                <ul>
                  <li>Follow</li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header-top-login">
                <ul>
                  <li>
                    <a href="#">
                      <i className="far fa-edit"></i>Register
                    </a>
                  </li>
                  <li className="or">or</li>
                  <li>
                    <a href="#">
                      <i className="far fa-edit"></i>sign in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="main-menu menu-style-two">
                <nav>
                  <div className="logo d-block d-lg-none">
                    <a href="index-5.html">
                      <img src="img/logo/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap d-none d-lg-flex">
                    <ul className="left">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Store">Store</Link>
                      </li>
                      <li>
                        <Link to="/Smm">OTT Services</Link>
                      </li>
                      <li>
                        <Link to="/Opt">OTP Services</Link>
                      </li>
                    </ul>
                    <div className="logo">
                      <Link to="/">
                        <img src="img/logo/h6_logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <ul className="right">
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/AboutUs">About Us</Link>
                      </li>

                      <li>
                        <Link to="/ContactUs">contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu-wrap d-block d-lg-none">
                <nav>
                  <div id="mobile-menu" className="navbar-wrap">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Store">Store</Link>
                      </li>
                      <li>
                        <Link to="/Smm">OTT Services</Link>
                      </li>
                      <li>
                        <Link to="/Opt">OTP </Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/AboutUs">About Us</Link>
                      </li>

                      <li>
                        <Link to="/ContactUs">contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-bg"></div>
    </header>
  );
}
