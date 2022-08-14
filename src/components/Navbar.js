import React from "react";
export default function Navbar() {
  return (
    <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <a className="navbar-brand" href="/">
          <img height="50" src="https://telegra.ph/file/dff924bcc1144977cb0b5.png"/>
          <strong>Induced Official</strong>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/languages">Languages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link dropbtn">Compilers</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="/compiler/Python">Python</a>
                  <a className="dropdown-item" href="/compiler/C">C</a>
                  <a className="dropdown-item" href="/compiler/Cpp">C++</a>
                  <a className="dropdown-item" href="/compiler/Php">Php</a>
                  <a className="dropdown-item" href="/compiler/Dart">Dart</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link dropbtn">Posts / News</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="/posts/tech">Tech</a>
                  <a className="dropdown-item" href="/posts/cars">Cars</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apis"> Apis </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about"> About  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/docs"><span className="badge badge-secondary">docs</span></a>
            </li>
          </ul>
        </div>
      
        <div className="dropdown">
          <img className="rounded-circle shadow" src="https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4" width="50"/>
          <div className="dropdown-content">
            <a className="dropdown-item" href="/Profile">Profile</a>
            <a className="dropdown-item" href="/Logout">Logout</a>
          </div>
        </div>
    
    </nav>
  );
};

