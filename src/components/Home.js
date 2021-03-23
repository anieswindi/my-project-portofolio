import React, { Component } from "react";
import cs from "./Home.module.css";
import { Slide } from "react-awesome-reveal";
import analysis from "./../assets/047-growth.png";
import optimation from "./../assets/036-tutorial.png";
import emails from "./../assets/015-list.png";
import config from "./../config/config";
import ava from "./../assets/ava.jpg";
import tw from "./../assets/s.png";
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
    };
    this.getDataAll = this.getDataAll.bind(this);
  }

  componentDidMount() {
    this.getDataAll();
  }

  getDataAll() {
    const api = new config();
    api.getDataAll().then((res) => {
      console.log(res.data.d);
      this.setState({ dataAll: res.data.d });
    });
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

    return (
      <div className={cs.customDiv}>
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
        <div className={["container", cs.customCs].join(" ")}>
          <div className={cs.t}>
            <div className={cs.t0}>
              <div className={cs.t01}>
                <img src={ava} alt="" />
              </div>
            </div>
            <div className={cs.t1}>
              <div className={cs.t1a}>
                <h1>@anieswindi</h1>
                <p>
                  Lorem ipsum Proident incididunt sint dolor cupidatat pariatur
                  dolore magna pariatur in ea aliqua.
                </p>
                <div className={cs.t1ab}>
                  <div className={cs.t1abb}>
                    <img src={tw} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cs.t}>
            <div className={cs.t0}>
              <div className={cs.t01}>
                <img src={ava} alt="" />
              </div>
            </div>
            <div className={cs.t1}>
              <div className={cs.t1a}>
                <h1>@anieswindi</h1>
                <p>
                  Lorem ipsum Proident incididunt sint dolor cupidatat pariatur
                  dolore magna pariatur in ea aliqua.
                </p>
                <div className={cs.t1ab}>
                  <div className={cs.t1abb}>
                    <img src={tw} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cs.t}>
            <div className={cs.t0}>
              <div className={cs.t01}>
                <img src={ava} alt="" />
              </div>
            </div>
            <div className={cs.t1}>
              <div className={cs.t1a}>
                <h1>@anieswindi</h1>
                <p>
                  Lorem ipsum Proident incididunt sint dolor cupidatat pariatur
                  dolore magna pariatur in ea aliqua.
                </p>
                <div className={cs.t1ab}>
                  <div className={cs.t1abb}>
                    <img src={tw} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={["container", cs.customCs2].join(" ")}>
          <div className={cs.j}>
            <p className={cs.k}>
              MY <span>CAPABILITIES</span>
            </p>
            <p className={cs.k1}>
              Lorem ipsum Cupidatat sit irure nostrud ut deserunt ad enim id
              laboris. Lorem ipsum Enim proident et eu et minim voluptate
              eiusmod ullamco commodo aliqua amet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
