import React from "react";
import {} from "antd";
import "antd/dist/antd.css";

import Template from "../template/Template";

class Sponsor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render Sponsor");
		return <Template contents={<div>Sponsor</div>} />;
	}
}

export default Sponsor;
