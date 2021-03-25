import React, { Component } from "react";
import cs from "./Home.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Capabilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capabilities: [
        { id: 0, val: 80, text: "Js" },
        { id: 1, val: 80, text: "CSS" },
        { id: 2, val: 80, text: "HTML" },
        { id: 3, val: 60, text: "Development" },
        { id: 4, val: 60, text: "Design" },
      ],
      isDark: false,
      isThemeChanged: "",
      currentSection: "",
    };
  }
  render() {
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
    return (
      <>
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
            <div className={cs.wrapProgress}>{progresBar}</div>
          </div>
        </div>
      </>
    );
  }
}
