import React, { useContext } from "react";
import "./DropDown.css";

const TvShowsDrop = () => {
  
  return (
    <section id="__DropDownBlock">
      <article>
        <div className="_leftDropBlock">
          <ul>
            <li>
              <a href="">Top Kannada Shows</a>
            </li>
            <li>
              <a href="">Must Watch Kannada Shows</a>
            </li>
            <li>
              <a href="">Latest on ZEE5</a>
            </li>
            <li>
              <a href="">Latest on ZEE5 | Kannada</a>
            </li>
          </ul>
        </div>
        <div className="_rightDropBlock">right</div>
      </article>
    </section>
  );
};

export default TvShowsDrop;
