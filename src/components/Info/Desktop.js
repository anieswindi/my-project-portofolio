import React, { Component } from "react";
import cs from "./Info.module.css";
import ava from "./../../assets/ava.jpg";
import tw from "./../../assets/s.png";
import git from "./../../assets/git.jpg";
import twt from "./../../assets/twt2.png";
export default class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
					link: "https://twitter.com/",
					content:
						"Lorem ipsum Proident incididunt sint dolor cupidatat pariatur dolore magna pariatur in ea aliqua.",
				},
			],
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
		let isDarkCard = this.state.isDark ? cs.darkCard : "";

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
								<a href={el.link} rel="noopener noreferrer">
									<div className={cs.t1abb}>
										<img src={el.src} alt="" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className={isDark}>
				<div className={cs.section_one}>
					<p className={cs.p}>
						SOCIAL <span>MEDIA</span>
					</p>
					<p className={cs.p_1}>
						Here's my account media social. Ignore the image for my
						avatar, and you can click the link attached in icon of media.
					</p>
					<div className={["container", cs.customCs].join(" ")}>
						{profile}
					</div>
				</div>
			</div>
		);
	}
}
