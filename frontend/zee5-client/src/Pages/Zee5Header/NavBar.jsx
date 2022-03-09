import React, { Fragment } from "react";
import "./__navbar.style.css";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
 
  return (
    <Fragment>
      <section id="_zeeHeaderSection">
        <article className="__zeeHeaderBlock">
          <LeftBlock />
          <RightBlock />
        </article>
      </section>
    </Fragment>
  );
};

export default NavBar;
