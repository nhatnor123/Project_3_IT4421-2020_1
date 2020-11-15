import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import HomePage from "./component/homepage/HomePage";
import About from "./component/about/About";
import Article from "./component/article/Article";
import ChildrenProfile from "./component/childrenProfile/ChildrenProfile";
import Sponsor from "./component/sponsor/Sponsor";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("re-render App.js");
		return (
			<div className="App">
				<Router>
					<Header />

					<Switch>
						<Route path="/" exact component={HomePage}></Route>
						<Route path="/about" exact component={About}></Route>
						<Route
							path="/article"
							exact
							component={Article}
						></Route>
						<Route
							path="/view-children-profile"
							exact
							component={ChildrenProfile}
						></Route>
						<Route
							path="/post-children-profile"
							exact
							component={ChildrenProfile}
						></Route>
						<Route
							path="/sponsor"
							exact
							component={Sponsor}
						></Route>
					</Switch>

					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
