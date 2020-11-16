import React from "react";
import {} from "antd";
import "antd/dist/antd.css";

import Template from "../template/Template";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render homepage");
		return <Template contents={<div>homepage</div>} />;
	}
}

export default HomePage;
