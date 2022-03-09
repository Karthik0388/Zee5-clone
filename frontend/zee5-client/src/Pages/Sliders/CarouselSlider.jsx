import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSlider = () => {
  return (
    <Carousel
      autoFocus={true}
      showThumbs={false}
      autoPlay={true}
      interval="2000"
      showStatus={false}
      infiniteLoop={true}
      showIndicators={true}
    >
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z575093/cover/1170x658withlogo3cedb90b89a2455e935bc0aa82059665.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z560954/cover/1170x658withlogo0cb68b41498a4b15b7c8d9939aedf964.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z519672/cover/1170x658withlogo744f4ae5a5d548598c13ed68a15c02b7178c48e194d34e1fa7d216d960b6092c.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587336/cover/1170x658withlogo955f906077fe4d38a39c85ee39a5fb68.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z587448/cover/1170x658withlogo7872ab889e8740fbb112ff3866efbe1b.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z590973/cover/1170x658withlogo5a3691b0e1ee4a9384a7745755ee376a.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
      <div
        className="carouselBlock"
        style={{ width: "90%", marginLeft: "80px", height: "100%" }}
      >
        <img
          src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z535888/cover/1170x658withlogoc7f9a58dccea4083b6e9f6523f3424ff.jpg"
          alt=""
          style={{ width: "90%", height: "95%" }}
        />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
