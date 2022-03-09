import React, { useContext } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { DropContextApi } from "../../Components/ContextApis/DropDownApi";
import TvShowsDrop from "./NavBarDropDowns/TvShowsDrop";
import "./NavBarDropDowns/DropDown.css";
import MoviesDropDown from "./NavBarDropDowns/MoviesDropDown";
import { Link } from "react-router-dom";

const LeftBlock = () => {
  let hovered = useContext(DropContextApi);
  let hover = hovered.hover;
  let onHover = hovered.onHover;

  console.log(hover);
  return (
    <div>
      <div className="__leftSide">
        <div className="___logoBlock">
          <a href="/">
            <img src="ZEE5_logo.svg" alt="zee5_logo" />
          </a>
        </div>
        <div className="___leftMenuBlock">
          <ul>
            <li className="list-items">
              <Link to="/">Home</Link>
            </li>
            <li
              className="list-items"
              onMouseOver={onHover}
              onMouseOut={onHover}
            >
              <a href="">TV Shows</a>
            </li>
            <main
              id="tvShowsDropDown"
              style={
                hover === true ? { display: "block" } : { display: "none" }
              }
            >
              <TvShowsDrop />
            </main>
            <li
              className="list-items"
              onMouseOver={onHover}
              onMouseOut={onHover}
            >
              <a href="">Movies</a>
            </li>
            <main
              id="tvShowsDropDown"
              style={
                hover === true ? { display: "block" } : { display: "none" }
              }
            >
              {/* <MoviesDropDown /> */}
            </main>
            <li className="list-items">
              <a href="">Web Series</a>
            </li>
            <li className="list-items">
              <a href="">News</a>
            </li>
            <li className="list-items">
              <a href="">Premium</a>
            </li>
            <li className="list-items">
              <a href="">Live TV</a>
            </li>
            <li className="list-items">
              <a href="">Music</a>
            </li>
            <li className="list-items">
              <a href="">
                <BsGrid3X3GapFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftBlock;
