import React from "react";

export default function MainGrid() {
  return (
    <section className="home-six-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-content">
              <h2 className="title-one">Tech</h2>
              <h3 className="title-two">
                world class <span>news</span>
              </h3>
            </div>
            <div className="banner-news-heading">
              <div className="headline">
                <h5>
                  News <span>Update</span>
                </h5>
                <p>Here’s an updated look at the 2022 NFL.</p>
              </div>
              <div className="social-link">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="banner-magazine-active">
              <div className="banner-magazine-item red">
                <div className="banner-magazine-thumb">
                  <div className="tags">
                    <a href="#">sports</a>
                  </div>
                  <img src="img/slider/banner_magazine_thumb02.jpg" alt="" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <a href="#">UN chief condems atrocious Ghana killings</a>
                  </h5>
                </div>
              </div>
              <div className="banner-magazine-item blue">
                <div className="banner-magazine-thumb">
                  <div className="tags">
                    <a href="#">sports</a>
                  </div>
                  <img src="img/slider/banner_magazine_thumb03.jpg" alt="" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <a href="#">
                      Hunger still quite persists in many of India's tribal
                    </a>
                  </h5>
                </div>
              </div>
              <div className="banner-magazine-item">
                <div className="banner-magazine-thumb">
                  <div className="tags">
                    <a href="#">sports</a>
                  </div>
                  <img src="img/slider/banner_magazine_thumb04.jpg" alt="" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <a href="#">
                      Hunger still quite persists in many of India's tribal
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
