import React from "react";
import "./css/about.css";

export default function about(props) {
  const Python = () => {
    document.getElementById("game").classList.toggle("show");
  };
  document.body.style.overflow = "hidden";
  if (props.text == "https://telegra.ph/file/bc7c99222655447fe0700.jpg") {
    document.body.classList.toggle("change");
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user" style={{ margin: "1rem" }}>
              <img
                style={{ borderRadius: "50%" }}
                height="100px"
                src={props.text}
              />
              <h3>Ishan Singla</h3>
              <h5>Devloper</h5>
            </div>
            <div className="links">
              <button type="submit" onClick={Python}>
                <div className="link">
                  <img
                    height="60px"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  />
                  <h4>Python Projects</h4>
                </div>
              </button>
              <button type="submit" onClick={Python}>
                <div className="link">
                  <img
                    height="50px"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  />
                  <h4>React Projects</h4>
                </div>
              </button>
              <button type="submit" onClick={Python}>
                <div className="link">
                  <img
                    height="50px"
                    src="https://raw.githubusercontent.com/dnfield/flutter_svg/7d374d7107561cbd906d7c0ca26fef02cc01e7c8/example/assets/flutter_logo.svg"
                  />
                  <h4>Flutter Projects</h4>
                </div>
              </button>
              <button type="submit" onClick={Python}>
                <div className="link">
                  <img
                    height="50px"
                    src="https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png"
                    alt=""
                  />
                  <h4>Flask Projects</h4>
                </div>
              </button>
            </div>
          </div>
          <div className="games">
            <h3
              style={{
                alignSelf: "center",
                color: "#658ec6",
                marginBottom: "3rem",
              }}
            >
              Skills Level
            </h3>
            <div className="card">
              <img src="https://www.svgrepo.com/show/416418/check-list-marketing.svg" />
              <h3 className="card-info">Projects Reviews</h3>
              <h4 className="percentage">68%</h4>
            </div>

            <div className="card">
              <img src="https://www.svgrepo.com/show/416424/appreciation-best-marketing.svg" />
              <h3 className="card-info">Knowledge Work</h3>
              <h4 className="percentage">83%</h4>
            </div>

            <div className="card">
              <img src="https://www.svgrepo.com/show/416419/idea-lamp-marketing.svg" />
              <h3 className="card-info">Cenceptual Knowledge</h3>
              <h4 className="percentage">40%</h4>
            </div>

            <div className="card">
              <img
                height="60px"
                src="https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1587721467"
              />
              <h3 className="card-info">DSA Knowledge</h3>
              <h4 className="percentage">5%</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
