import React from "react";
import { Navbar } from "rsuite";
// import { Link } from "react-router-dom";
import UseScrollPosition from "@react-hook/window-scroll";
import "./navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";

export default function navbar(props) {
  const ScrollY = UseScrollPosition(0);

  const navbar = props.data.map((el) => {
    console.log(el);
    return (
      <div
        key={el.id}
        className="navItem"
        onClick={() => props.scroll(el.name)}
      >
        <span
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "30px",
          }}
        >
          {el.name}
        </span>
      </div>
    );
  });

  let sticky;
  const w = window.screen.width;
  if (w <= 1440) {
    if (ScrollY >= "954") {
      sticky = "sticky";
    } else {
      sticky = "";
    }
  } else {
    if (ScrollY >= "1165") {
      sticky = "sticky";
    } else {
      sticky = "";
    }
  }

  return (
    <Navbar id="navbar_my_style" className={["navbar", sticky].join(" ")}>
      <div className="wrapper">
        <div className="left">
          <p>ANIES WINDIARTI</p>
        </div>
        <div className="right">
          <div className="halfRight">{navbar}</div>
        </div>
        <div className="switch">
          <DarkModeToggle
            onChange={props.onChange}
            checked={props.isChecked}
            size={70}
          />
        </div>
      </div>
    </Navbar>
  );
}
