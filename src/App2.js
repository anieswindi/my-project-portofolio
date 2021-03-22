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
import wall from "./assets/mobile-app-development.png";
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
      data_slide: [
        {
          id: 0,
          name: "About",
          source: wall,
        },
        {
          id: 1,
          name: "Experience",
          source: wall,
        },
        {
          id: 2,
          name: "Contact",
          source: wall,
        },
      ],
    };
  }

  render() {
    const data_slide = this.state.data_slide.map((el) => {
      return (
        <div className="flex_row">
          <div className="row_1">
            <h1>Simple App that we </h1>
            <em>CREATE</em>
            <p>
              Lava HTML landing page template is provided by TemplateMo.You can
              modify and use it for your commercial websites for free of charge.
              Nam maximus ex diam, nec consectetur diam.
            </p>
          </div>
          <img src={el.source} alt="" />
        </div>
      );
    });

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <Context.Provider value={this.state}>
        <Helmet title={this.state.title_page} />
        <Router>
          <div id="slider_top">
            <AutoplaySlider
              animation="cubeAnimation"
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={6000}
              className="customClass"
            >
              {data_slide}
            </AutoplaySlider>
          </div>
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
