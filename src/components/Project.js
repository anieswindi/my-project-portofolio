import React, { Component } from "react";
import cs from "./Project.module.css";
import config from "./../config/config";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

      currentSection: "",
    };
    this.getDataAll = this.getDataAll.bind(this);
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
  render() {
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
      <>
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
      </>
    );
  }
}
