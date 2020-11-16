import React from "react";
import {} from "antd";
import "antd/dist/antd.css";
import Template from "../template/Template";

class ChildrenProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render ChildrenProfile");
		return <Template contents={<div>ChildrenProfile</div>} />;
	}
}

export default ChildrenProfile;
