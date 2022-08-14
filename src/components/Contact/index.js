import React from "react";

export default function Contact() {
  return (
    <main>
      <section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2>
                  contact <span>info</span>
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">pages</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="contact-map"></div>
            </div>
            <div className="col-lg-6 pl-45">
              <div className="section-title title-style-three mb-20">
                <h2>
                  CONTACT US ABOUT <span>PRESS</span>
                </h2>
              </div>
              <div className="contact-info-list mb-40">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Walking Park, Los
                    Angeles, Brockland, USA
                  </li>

                </ul>
              </div>
              <div className="contact-form">
                <form action="#">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write Message..."
                  ></textarea>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Mail" />
                    </div>
                  </div>
                  <button>SUBMIT MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
