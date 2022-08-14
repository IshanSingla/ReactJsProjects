import React from 'react'

export default function MainHeader() {
  return (
    <section className="home-seven-slider">
                    <div className="h-seven-slider-item">
                        <div className="container custom-container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="h-seven-slider-content">
                                        <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".2">streamer Items <br/> <strong>for <span>$49_</span></strong></h2>
                                        <p data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut labore et dolore magna.</p>
                                        <a href="#" className="btn rotated-btn" data-animation-in="fadeInUp" data-delay-in=".6">buy Now</a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="h-seven-slider-img text-center">
                                        <img src="img/slider/shop_slider_img01.png" data-animation-in="slideInRightS" data-delay-in=".4" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
  )
}
