import React, { Component } from "react";
import Helmet from "react-helmet";
import cs from "./About.module.css";
import { Slide } from "react-awesome-reveal";
import analysis from "./../assets/047-growth.png";
import optimation from "./../assets/036-tutorial.png";
import emails from "./../assets/015-list.png";
import "react-circular-progressbar/dist/styles.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_sec_one: [
        {
          id: 1,
          src: analysis,
          title: "Trend Analysis",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",
          button: "More Details",
        },
        {
          id: 2,
          src: optimation,
          title: "Site Optimation",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",

          button: "More Details",
        },
        {
          id: 3,
          src: emails,
          title: "Email Design",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",
          button: "More Details",
        },
      ],
      dataAll: [],
      isChecked: false,
      isDark: false,
      isThemeChanged: "",
      currentSection: "",
    };
  }

  componentDidUpdate() {
    const theme = localStorage.getItem("theme");
    var isDarkTheme = false;
    if (theme === "darkMode") {
      isDarkTheme = true;
    }
    if (isDarkTheme !== this.state.isDark) {
      this.setState({ isDark: isDarkTheme });
    }
  }

  render() {
    let isDark = this.state.isDark ? cs.isDark : "";
    // let isDarkCard = this.state.isDark ? cs.darkCard : "";

    let cards = this.state.home_sec_one.map((el) => {
      return (
        <div className={cs.a}>
          <div className={[cs.a_a, isDark].join(" ")}>
            <h1>{el.title}</h1>
          </div>
          <div className={cs.b}>
            <img src={el.src} alt="" />
          </div>
          <div className={[cs.a_b, isDark].join(" ")}>
            <p>{el.text}</p>
          </div>
          <div className={cs.a_c}>
            <div className={cs.a_c_a}>
              <p>{el.button}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {" "}
        <Helmet title="About" />
        <div className={cs.section_one}>
          <p className={cs.p}>
            ABOUT <span>ME</span>
          </p>

          <p className={cs.p_1}>
            Lorem ipsum Esse esse cillum nisi cillum deserunt tempor ut pariatur
            qui officia. Lorem ipsum Magna eu irure sint occaecat cupidatat
            dolore minim irure cillum. Lorem ipsum Esse esse cillum nisi cillum
            deserunt tempor ut pariatur qui officia. Lorem ipsum Magna eu irure
            sint occaecat cupidatat dolore minim irure cillum.
          </p>
        </div>
        <div className={cs.section_two}>
          <Slide triggerOnce direction="up" duration={1000} delay={50}>
            {cards}
          </Slide>
        </div>
      </div>
    );
  }
}
