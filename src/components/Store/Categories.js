import React from "react";

export default function Categories() {
  return (
    <section className="game-shop-category pt-10 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="game-shop-title text-center mb-60">
              <h2 className="title">popular categories</h2>
            </div>
          </div>
        </div>
        <div className="row gs-category-active">
          <div className="col-5 grid-item">
            <div className="gs-category-item mb-20">
              <div className="thumb">
                <a href="#">
                  <img src="img/product/gs_popular_item01.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <h4>
                  <a href="#">gaming chair pillow</a>
                </h4>
                <a href="#" className="shop-link">
                  Shop Now <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 grid-item">
            <div className="gs-category-item style-two green-bg mb-20">
              <div className="thumb">
                <a href="#">
                  <img src="img/product/gs_popular_item02.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <h4>
                  <a href="#">Game headphone</a>
                </h4>
                <a href="#" className="shop-link">
                  Shop Now <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 grid-item">
            <div className="gs-category-item style-two mb-20">
              <div className="thumb">
                <a href="#">
                  <img src="img/product/gs_popular_item03.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <h4>
                  <a href="#">graphics card</a>
                </h4>
                <a href="#" className="shop-link">
                  Shop Now <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 grid-item">
            <div className="gs-category-item style-two mb-20">
              <div className="thumb">
                <a href="#">
                  <img src="img/product/gs_popular_item04.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <h4>
                  <a href="#">gaming chair pillow</a>
                </h4>
                <a href="#" className="shop-link">
                  Shop Now <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 grid-item">
            <div className="gs-category-item style-two mb-20">
              <div className="thumb">
                <a href="#">
                  <img src="img/product/gs_popular_item05.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <h4>
                  <a href="#">clothes Accessories</a>
                </h4>
                <a href="#" className="shop-link">
                  Shop Now <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
