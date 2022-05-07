import About from "./components/about";
import Navbar from "./components/Navbar";
import Api from "./components/api";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const togalUpClick = () => {
    document.body.classList.toggle("dmode");
    if (text == "https://telegra.ph/file/bc7c99222655447fe0700.jpg") {
      setText(
        "https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4"
      );
      setText1("light");
    } else {
      setText("https://telegra.ph/file/bc7c99222655447fe0700.jpg");
      setText1("dark");
    }
  };
  const [text, setText] = useState(
    "https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4"
  );
  const [mode, setText1] = useState("light");
  return (
    <>
      <div className="wrapper">
        <div className="toggle">
          <input
            className="toggle-input"
            type="checkbox"
            onClick={togalUpClick}
          />
          <div className="toggle-bg"></div>
          <div className="toggle-switch">
            <div className="toggle-switch-figure"></div>
            <div className="toggle-switch-figureAlt"></div>
          </div>
        </div>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home text={text} />} />
          <Route exact path="/about" element={<About text={text} />} />
          <Route
            exact
            path="/api"
            element={
              <>
                <Navbar title="Apis" />
                <Api mode="light" />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
