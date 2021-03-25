import React, { Component } from "react";
import cs from "./Home.module.css";
// import { Slide } from "react-awesome-reveal";
import analysis from "./../assets/047-growth.png";
import optimation from "./../assets/036-tutorial.png";
import emails from "./../assets/015-list.png";
import config from "./../config/config";
import ava from "./../assets/ava.jpg";
import tw from "./../assets/s.png";
import git from "./../assets/git.jpg";
import twt from "./../assets/twt2.png";
import "react-circular-progressbar/dist/styles.css";
import letter from "../assets/letter.png";
import pin from "../assets/pin.png";
import call from "../assets/call.png";
// import { Link } from "react-router-dom";
// import axios from "axios";

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
      dataAll: [],
      isChecked: false,
      capabilities: [
        { id: 0, val: 80, text: "Js" },
        { id: 1, val: 80, text: "CSS" },
        { id: 2, val: 80, text: "HTML" },
        { id: 3, val: 60, text: "Development" },
        { id: 4, val: 60, text: "Design" },
      ],
      isDark: false,
      isThemeChanged: "",
      dataProfile: [
        {
          id: 0,
          title: "Anies Windiarti",
          src: tw,
          ava: ava,
          link: "https://www.linkedin.com/in/anies-windiarti/",
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
        {
          id: 1,
          title: "@windiarties",
          src: git,
          ava: ava,
          link: "https://github.com/windiarties/my-project-portofolio",
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
        {
          id: 2,
          title: "@anieswindi",
          src: twt,
          ava: ava,
          link: "https://twitter.com/anieswindi",
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
      ],
      contact: [
        {
          id: 0,
          account: "anieswindiarti@gmail.com",
          src: letter,
          link: "mailto:anieswindiarti@gmail.com",
        },
        {
          id: 1,
          account: "+6283-8677-28740",
          src: call,
          link: "https://api.whatsapp.com/send?phone=6283867728740",
        },
        {
          id: 2,
          account: "Batuampar street 1, Kramat Jati, East Jakarta",
          src: pin,
          link:
            "https://www.google.com/maps/place/Batu+Ampar,+Kramat+Jati,+East+Jakarta+City,+Jakarta/@-6.2808135,106.8532787,15z/data=!3m1!4b1!4m5!3m4!1s0x2e69f26109e432ef:0xfd4d6c4bf0ce7469!8m2!3d-6.2748193!4d106.8620891",
        },
      ],
      currentSection: "",
    };
    this.getDataAll = this.getDataAll.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  componentDidMount() {
    this.getDataAll();
  }

  getDataAll() {
    const api = new config();
    api.getDataAll().then((res) => {
      this.setState({ dataAll: res.data.d });
    });
  }

  onChangeHandle() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    let isDark = this.state.isDark ? cs.isDark : "";
    // let isDarkCard = this.state.isDark ? cs.darkCard : "";

    return <div className={[cs.customDiv, isDark].join(" ")}></div>;
  }
}
