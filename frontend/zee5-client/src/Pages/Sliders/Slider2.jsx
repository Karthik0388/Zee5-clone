import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Slider2 = () => {
  return (
    <section id="section1Block">
      <article>
        <div className="topSection">
          <h2>Exclusive Movies on ZEE5</h2>
          <p>
            More
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div className="bottomSection">
          <div className="img1Block">
            <a href="/">
              <img
                src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51037/portrait/1920x770fe734f03103940239299810a07731993.jpg"
                alt="StaticImg1"
              />
            </a>
          </div>
          <div className="img2Block">
            <a href="/">
              <img
                src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-122736/portrait/1920x77052d26ebbbbe84965ba5a44b5018e3881.jpg"
                alt="StaticImg2"
              />
            </a>
          </div>
          <div className="img3Block">
            <a href="/">
              <img src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-manual_14f6f12ndhmo/portrait/1920x7701253328845.jpg" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Slider2;
