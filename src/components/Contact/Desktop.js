import React, { Component } from "react";
import cs from "./Contact.module.css";
import letter from "../../assets/letter.png";
import pin from "../../assets/pin.png";
import call from "../../assets/call.png";
export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
			isDark: false,
			isThemeChanged: "",
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
					account: "Jalan Batuampar 1 RT 08/ RW 01, Kramat JAti, Jakarta Timur",
					src: pin,
					link: "https://www.google.com/maps/place/Batu+Ampar,+Kramat+Jati,+East+Jakarta+City,+Jakarta/@-6.2808135,106.8532787,15z/data=!3m1!4b1!4m5!3m4!1s0x2e69f26109e432ef:0xfd4d6c4bf0ce7469!8m2!3d-6.2748193!4d106.8620891",
				},
			],
			currentSection: "",
		};
	}
	render() {
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
		let inspired_by = (
			<div className={cs.w}>
				Insipred by : &nbsp;
				<p>https://www.free-css.com/free-css-templates/page264/lava</p>,
				&nbsp;
				<span>
					https://www.free-css.com/free-css-templates/page264/daraz
				</span>
				, &nbsp;
				<p>https://www.freepik.com/</p>
			</div>
		);
		return (
			<>
				{" "}
				<div className={["container", cs.customCs3].join(" ")}>
					<div className={cs.j}>
						<p className={cs.k}>CONTACT</p>
						<p className={cs.k1}>
							Pleae contact me if you interest with my profile. Here's my contact.
						</p>
						<div className={cs.wrapProgress2}>
							<div className={cs.u}>{contacts}</div>
						</div>
						{inspired_by}
					</div>
				</div>
			</>
		);
	}
}
