import React, { Component } from "react";
import cs from "./Home.module.css";
import { Slide } from "react-awesome-reveal";
import analysis from "./../assets/047-growth.png";
import optimation from "./../assets/036-tutorial.png";
import emails from "./../assets/015-list.png";
import config from "./../config/config";
import ava from "./../assets/ava.jpg";
import tw from "./../assets/s.png";
import igs from "./../assets/igs2.jpg";
import twt from "./../assets/twt2.png";
import { CircularProgressbar } from "react-circular-progressbar";
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
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
        {
          id: 1,
          title: "@kemaniesan",
          src: igs,
          ava: ava,
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
        {
          id: 2,
          title: "@anieswindi",
          src: twt,
          ava: ava,
          content:
            "Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
        },
      ],
      contact: [
        {
          id: 0,
          account: "anieswindirti@gmail.com",
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
    };
    this.getDataAll = this.getDataAll.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  componentDidMount() {
    this.getDataAll();
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
    let isDarkCard = this.state.isDark ? cs.darkCard : "";

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

    let projectCards = this.state.dataAll.map((item, i) => {
      let res;
      if (i <= 3) {
        res = (
          <div className={cs.r}>
            <img src={item.i.imageUrl} alt="" />
          </div>
        );
      }
      return <>{res}</>;
    });

    let projectCardsTwo = this.state.dataAll.map((item, i) => {
      let res;
      if (i > 3) {
        res = (
          <div className={cs.r}>
            <img src={item.i.imageUrl} alt="" />
          </div>
        );
      }
      return <>{res}</>;
    });

    let progresBar = this.state.capabilities.map((el) => {
      return (
        <div className={cs.m}>
          <p>{el.text}</p>
          <div className={cs.l}>
            <CircularProgressbar value={el.val} text={`${el.val}%`} />
          </div>
        </div>
      );
    });

    let profile = this.state.dataProfile.map((el) => {
      return (
        <div className={cs.t} key={el.id}>
          <div className={cs.t0}>
            <div className={cs.t01}>
              <img src={el.ava} alt="" />
            </div>
          </div>
          <div className={[cs.t1, isDarkCard].join(" ")}>
            <div className={cs.t1a}>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
              <div className={cs.t1ab}>
                <div className={cs.t1abb}>
                  <img src={el.src} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    let capability = (
      <div className={["container", cs.customCs2].join(" ")}>
        <div className={cs.j}>
          <p className={cs.k}>
            MY <span>CAPABILITIES</span>
          </p>
          <p className={cs.k1}>
            Lorem ipsum Cupidatat sit irure nostrud ut deserunt ad enim id
            laboris. Lorem ipsum Enim proident et eu et minim voluptate eiusmod
            ullamco commodo aliqua amet.
          </p>
          <div className={cs.wrapProgress}>{progresBar}</div>
        </div>
      </div>
    );

    let contacts = this.state.contact.map((el) => {
      return (
        <div className={cs.v1}>
          <img src={el.src} alt="" />
          <a rel="noopener noreferrer" href={el.link} target="_blank">
            <p>{el.account}</p>
          </a>
        </div>
      );
    });

    let contact = (
      <div className={["container", cs.customCs3].join(" ")}>
        <div className={cs.j}>
          <p className={cs.k}>CONTACT</p>
          <p className={cs.k1}>
            Lorem ipsum Cupidatat sit irure nostrud ut deserunt ad enim id
            laboris. Lorem ipsum Enim proident et eu et minim voluptate eiusmod
            ullamco commodo aliqua amet.
          </p>
          <div className={cs.wrapProgress2}>
            <div className={cs.u}>{contacts}</div>
          </div>
        </div>
      </div>
    );

    return (
      <div className={[cs.customDiv, isDark].join(" ")}>
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
        <div className={cs.section_one}>
          <p className={cs.p}>PROJECT</p>
          <p className={cs.p_1}>
            Lorem ipsum Cupidatat sit irure nostrud ut deserunt ad enim id
            laboris. Lorem ipsum Enim proident et eu et minim voluptate eiusmod
            ullamco commodo aliqua amet.
          </p>
        </div>
        <div className={cs.q}>{projectCards}</div>
        <div className={cs.q1}>{projectCardsTwo}</div>

        <div className={cs.section_one}>
          <p className={cs.p}>
            SOCIAL <span>MEDIA</span>
          </p>
          <p className={cs.p_1}>
            Lorem ipsum Cupidatat sit irure nostrud ut deserunt ad enim id
            laboris. Lorem ipsum Enim proident et eu et minim voluptate eiusmod
            ullamco commodo aliqua amet.
          </p>
        </div>
        <div className={["container", cs.customCs].join(" ")}>{profile}</div>
        {capability}
        {contact}
      </div>
    );
  }
}
