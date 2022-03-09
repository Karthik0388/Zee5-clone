import React, { useEffect, useRef, useContext, useState } from "react";
import { DropContextApi } from "../../Components/ContextApis/DropDownApi";
import Collapsible from "react-collapsible";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const DropdownMenu = () => {
  let value = useContext(DropContextApi);
  let dropDownRef = useRef();
  let [drop, setDrop] = useState(true);
  let handleDrop = e => {
    e.preventDefault();
    setDrop(!drop);
  };

  useEffect(() => {
    if (value.state === true) {
      dropDownRef.current.classList.add("activeClass");
    } else {
      dropDownRef.current.classList.remove("activeClass");
    }
  }, [value.state]);
  return (
    <section id="dropDownSlide" ref={dropDownRef}>
      <nav>
        <div className="dropDivs">
          <a href="/">Home</a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <div>
              <Collapsible trigger="Explore">
                <a href="">Tv Shows</a>
                <a href="">Movies</a>
                <a href="">Web Series</a>
                <a href="">News</a>
                <a href="">Premium</a>
                <a href="">Live Tv</a>
                <a href="">Music</a>
                <a href="">ZEEPLEX</a>
                <a href="">Play</a>
                <a href="">Article</a>
                <a href="">Learning</a>
                <a href="">Kids</a>
                <a href="">Videos</a>
                <a href="">Stories</a>
                <a href="">Channels</a>
              </Collapsible>
            </div>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Plans">
              <a href="">Buy Plan</a>
              <a href="">Have a Prepaid code?</a>
            </Collapsible>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Settings">
              <a href="">Reset Settings to Default</a>
            </Collapsible>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Info">
              <a href="">About Us</a>
              <a href="">Help Center</a>
              <a href="">Grievance Redressal</a>
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
            </Collapsible>
          </a>
        </div>
        <div className="versionText">
          <a href="">Version</a>
        </div>
      </nav>
    </section>
  );
};

export default DropdownMenu;
