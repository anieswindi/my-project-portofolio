import React from "react";
import { Navbar } from "rsuite";
import { Link } from "react-router-dom";
import UseScrollPosition from "@react-hook/window-scroll";
import "./navbar.css";

export default function navbar(props) {
  const ScrollY = UseScrollPosition(0);

  const navbar = props.data.map((el) => {
    return (
      <Link to={`/${el.name}`} key={el.id} className="navItem">
        <span
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "30px",
          }}
        >
          {el.name}
        </span>
      </Link>
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
          <p>ANIES</p>
        </div>
        <div className="right">
          <div className="halfRight">{navbar}</div>
        </div>
      </div>
    </Navbar>
  );
}
