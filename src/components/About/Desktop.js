import React, { Component } from "react";
import Helmet from "react-helmet";
import cs from "./About.module.css";
import { Slide } from "react-awesome-reveal";
import styled from "./../../assets/web.png";
import dev from "./../../assets/web-development.png";
import design from "./../../assets/web-design.png";
import "react-circular-progressbar/dist/styles.css";

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home_sec_one: [
				{
					id: 1,
					src: styled,
					title: "Styled Components",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",
					button: "More Details",
				},
				{
					id: 2,
					src: dev,
					title: "Site Optimation",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",

					button: "More Details",
				},
				{
					id: 3,
					src: design,
					title: "Responsive Design",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenec lectus vel magna vehicula hendrerit. Mauris commodo, semnon mollis dictum, libero dolor molestie enim, in molestieeros diam id neque.",
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
				<Helmet title="Anies Windiarti" />
				<div className={[cs.section_one, isDark].join(" ")}>
					<p className={cs.p}>
						ABOUT <span>ME</span>
					</p>

					<p className={cs.p_1}>
						I am Anies Windiarti. Peoples call me Anies. I graduated
						from Jenderal Soedirman University, Central Java as
						Bachelor of Sains. I have 2 years experience use
						Javascript. Many website I build for, and use ReactJs to
						improve the user interface. My skills are HTML, CSS,
						material-UI, emotion/react, antd for modern CSS.
					</p>
				</div>
				<div className={cs.section_two}>
					<Slide
						triggerOnce
						direction="up"
						duration={1000}
						delay={50}
					>
						{cards}
					</Slide>
				</div>
			</div>
		);
	}
}
