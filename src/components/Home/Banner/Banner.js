import React from "react";
import BannerImg from "../../../images/banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BannerImg} alt="" />
      <div className="position-absolute w-100 z-index-1 bottom-0">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="moving-waves">
          <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(251,251,251,0.40"></use>
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(251,251,251,0.35)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(251,251,251,0.25)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(251,251,251,0.20)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(251,251,251,0.15)"></use>
          <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(251,251,251,0.95"></use>
        </g>
      </svg>
      </div>
    </div>
  );
};

export default Banner;
