import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Icon, Avatar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ava from "./assets/ava.jpg";
import Context from "./Context";
import "./App2.css";

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: "About",
        },
        {
          id: 1,
          name: "Experience",
        },
        {
          id: 2,
          name: "Contact",
        },
      ],
    };
  }

  render() {
    let navbar = this.state.items.map((el) => {
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
    return (
      <Context.Provider>
        <Router>
          <Navbar id="navbar_my_style">
            <Navbar.Header>
              <Avatar circle src={ava}></Avatar>
            </Navbar.Header>
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

          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Experience">
              <Experience />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );
  }
}
