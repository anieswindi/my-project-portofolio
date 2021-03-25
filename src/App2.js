import React, { Component, createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
// import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Capabilities from "./components/Capabilities";
import Context from "./Context";
import "./App2.css";
// import Navbar from "./navbar/navbar";
import wall from "./assets/mobile-app-development.png";
import Helmet from "react-helmet";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { ParallaxProvider } from "react-scroll-parallax";
// import UseScrollPosition from "@react-hook/window-scroll";
import DarkModeToggle from "react-dark-mode-toggle";
import { Navbar } from "rsuite";
import "./navbar/navbar.css";

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
// const ScrollY = UseScrollPosition(0);
class App2 extends Component {
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
      currentSection: "",
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.scrollingHandler = this.scrollingHandler.bind(this);
    // this.section1 = null;
    // this.section2 = null;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollingHandler, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollingHandler, true);
  }

  section1 = createRef();
  section2 = createRef();
  section3 = createRef();
  section4 = createRef();
  section5 = createRef();
  section6 = createRef();

  scrollingHandler() {
    if (
      this.section1.current.getBoundingClientRect().bottom <
        this.section1.current.getBoundingClientRect().height &&
      this.section1.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section1",
      });
    }
    //if(this.section2.current.getBoundingClientRect().y < 100 && this.section2.current.getBoundingClientRect().bottom > 100){
    if (
      this.section2.current.getBoundingClientRect().bottom <
        this.section2.current.getBoundingClientRect().height &&
      this.section2.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section2",
      });
    }
    if (
      this.section3.current.getBoundingClientRect().bottom <
        this.section3.current.getBoundingClientRect().height &&
      this.section3.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section3",
      });
    }
    if (
      this.section4.current.getBoundingClientRect().bottom <
        this.section4.current.getBoundingClientRect().height &&
      this.section4.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section4",
      });
    }
    if (
      this.section5.current.getBoundingClientRect().bottom <
        this.section5.current.getBoundingClientRect().height &&
      this.section5.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section5",
      });
    }
    if (
      this.section6.current.getBoundingClientRect().bottom <
        this.section6.current.getBoundingClientRect().height &&
      this.section6.current.getBoundingClientRect().bottom > -1
    ) {
      this.setState({
        currentSection: "Section6",
      });
    }
  }

  scrolltoSectionHandler(key) {
    if (key === "Home") {
      this.section1.current.scrollIntoView({ behavior: "smooth" });
    } else if (key === "About") {
      this.section2.current.scrollIntoView({ behavior: "smooth" });
    } else if (key === "Project") {
      this.section3.current.scrollIntoView({ behavior: "smooth" });
    } else if (key === "Info") {
      this.section4.current.scrollIntoView({ behavior: "smooth" });
    } else if (key === "Capabilities") {
      this.section5.current.scrollIntoView({ behavior: "smooth" });
    } else if (key === "Contact") {
      this.section6.current.scrollIntoView({ behavior: "smooth" });
    }
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
    let sticky;
    const w = window.screen.width;
    const y = window.scrollY;
    // const s = window.scro
    if (w <= 1440) {
      if (y >= 1142) {
        sticky = "sticky";
      } else {
        sticky = "";
      }
    } else {
      if (y >= 1100) {
        sticky = "sticky";
      } else {
        sticky = "";
      }
    }

    let navbar = this.state.items.map((el) => {
      return (
        <div
          key={el.id}
          className="navItem"
          onClick={() => this.scrolltoSectionHandler(el.name)}
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

    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={this.state.isChecked ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Helmet title={this.state.title_page} />
          <Router>
            <div id="slider_top" ref={this.section1}>
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
              id="navbar_my_style"
              className={["navbar", sticky].join(" ")}
            >
              <div className="wrapper">
                <div className="left">
                  <p>ANIES WINDIARTI</p>
                </div>
                <div className="right">
                  <div className="halfRight">{navbar}</div>
                </div>
                <div className="switch">
                  <DarkModeToggle
                    onChange={this.onChangeHandle}
                    checked={this.state.isChecked}
                    size={70}
                  />
                </div>
              </div>
            </Navbar>
            {/* <Navbar
              data={this.state.items}
              isChecked={this.state.isChecked}
              onChange={this.onChangeHandle}
              scroll={this.scrolltoSectionHandler}
            /> */}
            {/* <Route path="/About">
                <About />
              </Route>
              <Route path="/Experience">
                <Experience />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route> */}
            <ParallaxProvider>
              <React.Fragment>
                {/* <div ref={this.section1}>
                  <Home />
                </div> */}
                <div ref={this.section2}>
                  <About />
                </div>
                <div ref={this.section3}>
                  <Project />
                </div>
                <div ref={this.section4}>
                  <Info />
                </div>
                <div ref={this.section5}>
                  <Capabilities />
                </div>
                <div ref={this.section6}>
                  <Contact />
                </div>
              </React.Fragment>
            </ParallaxProvider>
          </Router>
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
export default App2;
