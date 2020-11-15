import React from "react";
import {} from "antd";
import "antd/dist/antd.css";

class Article extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render Article");
		return <div>Article</div>;
	}
}

export default Article;
