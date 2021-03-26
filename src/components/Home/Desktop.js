import React, { Component } from "react";
import cs from "./Home.module.css";
import config from "./../../config/config";
import "react-circular-progressbar/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import wall from "./../../assets/mobile-app-development.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      dataAll: [],
      isChecked: false,
      isDark: false,
      isThemeChanged: "",
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
    const AutoplaySlider = withAutoplay(AwesomeSlider);
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

    return (
      <div className={[cs.customDiv, isDark].join(" ")} id="slider_top">
        <AutoplaySlider
          animation="cubeAnimation"
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          className="customClass"
        >
          {data_slide}
        </AutoplaySlider>
      </div>
    );
  }
}
