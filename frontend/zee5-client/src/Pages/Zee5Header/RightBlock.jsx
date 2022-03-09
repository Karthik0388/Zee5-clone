import React, { Fragment, useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVipCrownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DropContextApi } from "../../Components/ContextApis/DropDownApi";
import DropdownMenu from "./DropDownMenu";

const RightBlock = () => {
  let token = localStorage.getItem("Signin-Token");
 
  console.log(token);

  let handleClick = () => {
    let token = localStorage.clear();
  };
  let value = useContext(DropContextApi);
  console.log(value.makeToggleIt);
  let makeToggleIt = value.makeToggleIt;

  return (
    <Fragment>
      <aside className="__rightSide">
        <main>
          <div className="__menuSplitter">
            <span>
              <a href="">
                <BiSearch />
              </a>
            </span>
          </div>
          <div className="__menuSplitter">
            <span>
              <a href="">
                <FaLanguage />
              </a>
            </span>
          </div>

          <div className="__menuSplitter">
            {token ? (
              <a href="/" onClick={handleClick}>
                Logout
              </a>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
          <div className="__menuSplitter">
            <a href="">
              <span>
                <RiVipCrownFill />
              </span>
              Buy Plan
            </a>
          </div>
          <div className="__menuSplitter">
            <span onClick={makeToggleIt}>
              <GiHamburgerMenu />
            </span>
          </div>
          <aside className="asideBlock">
            <DropdownMenu />
          </aside>
        </main>
      </aside>
    </Fragment>
  );
};

export default RightBlock;
