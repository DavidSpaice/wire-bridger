import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pt-20 pt-md-0 text-center">
        <h2 className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
          WIRE BRIDGER
        </h2>
        <h1 className="hs-title-4 font-alt mb-60 mb-sm-40">
          <AnimatedText text="HVAC Innovative Wire Solutions" />
          <br />
          <AnimatedText text="Proudly Canadian Designed." />
        </h1>
        <div
          className="local-scroll wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          <a
            href="#products"
            className="btn btn-mod btn-circle btn-white btn-ellipse"
            data-btn-animate="ellipse"
          >
            <span className="btn-ellipse-inner">
              <span className="btn-ellipse-unhovered">Discover Products</span>
              <span className="btn-ellipse-hovered" aria-hidden="true">
                Discover Products
              </span>
            </span>
          </a>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-4">
            <i className="icon-arrow-down1 size-22" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Status */}
      <div className="hs-status wow fadeInUp" data-wow-offset={0}>
        Pioneering HVAC Wire Solutions
      </div>
      {/* End Status */}
    </div>
  );
}
