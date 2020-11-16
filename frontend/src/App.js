import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./component/register/Register";
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
					<Switch>
						<Route path="/register" exact component={Register} />

						<Route path="/" exact component={HomePage} />
						<Route path="/about" exact component={About} />
						<Route path="/article" exact component={Article} />
						<Route
							path="/view-children-profile"
							exact
							component={ChildrenProfile}
						/>
						<Route
							path="/post-children-profile"
							exact
							component={ChildrenProfile}
						/>
						<Route path="/sponsor" exact component={Sponsor} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
