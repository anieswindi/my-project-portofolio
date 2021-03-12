import React, { Component } from "react";
import cs from "./Home.module.css";
import { Slide } from "react-awesome-reveal";
import analysis from "./asset/047-growth.png";
import optimation from "./asset/036-tutorial.png";
import emails from "./asset/015-list.png";

export default class Home extends Component {
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
    };
  }
  render() {
    let cards = this.state.home_sec_one.map((el) => {
      return (
        <div className={cs.a}>
          <div className={cs.a_a}>
            <h1>{el.title}</h1>
          </div>
          <div className={cs.b}>
            <img src={el.src} alt="" />
          </div>
          <div className={cs.a_b}>
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
      <div className="container">
        <div className={cs.section}>
          <Slide triggerOnce direction="up" duration={1000}>
            {cards}
          </Slide>
        </div>
      </div>
    );
  }
}
