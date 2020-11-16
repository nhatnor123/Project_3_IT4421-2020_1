import React from "react";
import {} from "antd";
import "antd/dist/antd.css";
import Template from "../template/Template";

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render about");
		return <Template contents={<div>about</div>} />;
	}
}

export default About;
