import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Context from "./Context";
import "./App2.css";
import Navbar from "./navbar/navbar";

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
    return (
      <Context.Provider>
        <Router>
          <Navbar data={this.state.items} />
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
