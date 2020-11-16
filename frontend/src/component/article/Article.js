import React from "react";
import {} from "antd";
import "antd/dist/antd.css";
import Template from "../template/Template";

class Article extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render Article");
		return <Template contents={<div>article</div>} />;
	}
}

export default Article;
