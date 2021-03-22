import React from "react";
import { Navbar, Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import UseScrollPosition from "@react-hook/window-scroll";
import "./navbar.css";

export default function navbar(props) {
  const ScrollY = UseScrollPosition(0);

  const navbar = props.data.map((el) => {
    return (
      <Link to={`/${el.name}`} key={el.id}>
        <Nav.Item>
          <span
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "30px",
            }}
          >
            {el.name}
          </span>
        </Nav.Item>
      </Link>
    );
  });

  let sticky;
  console.log(window.screen);
  const w = window.screen.width;
  if (w <= 1440) {
    if (ScrollY >= "954") {
      sticky = "sticky";
    } else {
      sticky = "";
    }
  } else {
    if (ScrollY >= "1166") {
      sticky = "sticky";
    } else {
      sticky = "";
    }
  }

  return (
    <Navbar id="navbar_my_style" className={["navbar", sticky].join(" ")}>
      <Navbar.Body>
        <Nav>
          <Link to="/">
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          </Link>
          {navbar}
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
