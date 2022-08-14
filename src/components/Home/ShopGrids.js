import React from "react";

export default function ShopGrids() {
  return (
    <section className="latest-collection-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="latest-collection-item mb-30">
              <div className="lc-item-thumb">
                <a href="#">
                  <img src="img/product/latest_collection01.jpg" alt="" />
                </a>
              </div>
              <div className="lc-item-content">
                <h4>Latest Collection</h4>
                <p>Lorem ipsum dolor sitjst amet consetur adipisng</p>
                <a href="#" className="btn rotated-btn">
                  buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-9">
            <div className="latest-collection-item mb-30">
              <div className="lc-item-thumb">
                <a href="#">
                  <img src="img/product/latest_collection02.jpg" alt="" />
                </a>
              </div>
              <div className="lc-item-content">
                <h4>Best Selling Items</h4>
                <p>Lorem ipsum dolor sitjst amet consetur adipisng</p>
                <a href="#" className="btn rotated-btn">
                  buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
