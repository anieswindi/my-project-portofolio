import React, { Component } from "react";
import cs from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className={cs.section}>
          <div className={cs.a}>test</div>
          <div className={cs.a}></div>
          <div className={cs.a}></div>
        </div>
      </div>
    );
  }
}
