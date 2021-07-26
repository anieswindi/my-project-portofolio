import React, { Component } from "react";
import cs from "./Project.module.css";
import config from "./../../config/config";

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
		let isDark = this.state.isDark ? cs.isDark : "";
		let projectCards = this.state.dataAll.map((item, i) => {
			let res, url, site, title_project;

			if (i <= 3) {
				if (i === 0) {
					url = "/";
					site = "intellsystem";
					title_project = "Intelligence System";
				} else if (i === 1) {
					url = "/";
					site = "ddexconverter";
					title_project = "DDEX Converter";
				} else if (i === 2) {
					url = "/";
					site = "ytscraping";
					title_project = "Web Scraping";
				} else {
					url = "/";
					site = " ";
					title_project = " ";
				}
				res = (
					<div className={cs.r}>
						<img src={item.i.imageUrl} alt="" />
						<div className={cs.cd}>
							<div className={cs.cg}></div>
							<div className={cs.cff}>
								<p>{title_project}</p>
								<a
									rel="noopener noreferrer"
									href={url}
									target="_blank"
								>
									<p>{site}</p>
								</a>
							</div>
						</div>
					</div>
				);
			}
			return <>{res}</>;
		});

		let projectCardsTwo = this.state.dataAll.map((item, i) => {
			let res, url, site, title_project;
			if (i > 3) {
				if (i === 4) {
					url = "https://www.phenikaa.com/";
					site = "www.phenikaa.com";
					title_project = "Phenikaa Website";
				} else if (i === 5) {
					url = "http://admin.phenikaa.com/";
					site = "admin.phenikaa.com";
					title_project = "Admin Phenikaa";
				} else {
					url = "/";
					site = " ";
					title_project = " ";
				}
				res = (
					<div className={cs.r}>
						<img src={item.i.imageUrl} alt="" />
						<div className={cs.cd}>
							<div className={cs.cg}></div>
							<div className={cs.cf}>
								<p>{title_project}</p>
								<a
									rel="noopener noreferrer"
									href={url}
									target="_blank"
								>
									<p>{site}</p>
								</a>
							</div>
						</div>
					</div>
				);
			}
			return <>{res}</>;
		});
		return (
			<>
				<div className={[cs.section_one, isDark].join(" ")}>
					<p className={cs.p}>PROJECT</p>
					<p className={cs.p_1}>
						Please click link below to see my previous project. I
						get some picture from call api IMDB to show and recheck my
						capability from get API.
					</p>
				</div>
				<div className={cs.q}>{projectCards}</div>
				<div className={cs.q1}>{projectCardsTwo}</div>
			</>
		);
	}
}
