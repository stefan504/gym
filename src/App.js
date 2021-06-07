import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Tracker from './components/Tracker';
import Footer from './components/Footer';
import Blog from './components/Blog';
function App() {
	return (
		<Router>
			<div className="nav-container">
				<nav className="nav">
					<Link to="/" className="logo-container"></Link>
					<div className="list-container">
						<ul className="list">
							<li className="list-items">
								<Link to="/">Home</Link>
							</li>
							<li className="list-items">
								<Link to="/blog">Blog</Link>
							</li>
							<li className="list-items">
								<Link to="/tracker">Tracker</Link>
							</li>
						</ul>
					</div>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/tracker">
						<Tracker />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

// function HomeNav() {
// 	return <Home />;
// }

// function BlogNav() {
// 	return <Blog />;
// }

// function TrackerNav() {
// 	return (
// 		<h2>
// 			<Tracker />
// 		</h2>
// 	);
// }
export default App;
