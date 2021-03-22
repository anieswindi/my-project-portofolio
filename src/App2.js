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
import wall from "./assets/wallpaper_after_crop.jpg";
import Helmet from "react-helmet";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_page: "My App",
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
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div>
          <img src={wall} alt="" />
        </div>
        <div>
          <img src={wall} alt="" />
        </div>
        <div>
          <img src={wall} alt="" />
        </div>
        <div>
          <img src={wall} alt="" />
        </div>
      </AutoplaySlider>
    );

    return (
      <Context.Provider value={this.state}>
        <Helmet title={this.state.title_page} />
        <Router>
          <div className="images">{slider}</div>
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
