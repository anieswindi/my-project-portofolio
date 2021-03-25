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
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_page: "My App",
      items: [
        { id: 0, name: "Home" },
        {
          id: 1,
          name: "About",
        },
        {
          id: 2,
          name: "Project",
        },
        {
          id: 3,
          name: "Info",
        },
        {
          id: 4,
          name: "Capabilities",
        },
        {
          id: 5,
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
      isChecked: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle() {
    this.setState({
      isChecked: !this.state.isChecked,
    });

    if (this.state.isChecked) {
      localStorage.setItem("theme", "lightMode");
    } else {
      localStorage.setItem("theme", "darkMode");
    }
  }

  render() {
    const data_slide = this.state.data_slide.map((el) => {
      return (
        <div className="flex_row">
          <div className="row_1">
            <h1>
              Simple App that we <em>CREATE</em>
            </h1>

            <p>
              Lava HTML landing page template is provided by TemplateMo.You can
              modify and use it for your commercial websites for free of charge.
              Nam maximus ex diam, nec consectetur diam.
            </p>

            <button className="buttonUs">
              <p>Know me better</p>
            </button>
          </div>
          <img src={el.source} alt="" />
        </div>
      );
    });

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={this.state.isChecked ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Helmet title={this.state.title_page} />
          <Router>
            <div id="slider_top">
              <AutoplaySlider
                animation="cubeAnimation"
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                className="customClass"
              >
                {data_slide}
              </AutoplaySlider>
            </div>
            <Navbar
              data={this.state.items}
              isChecked={this.state.isChecked}
              onChange={this.onChangeHandle}
            />
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
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
