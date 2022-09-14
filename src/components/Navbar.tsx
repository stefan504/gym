import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from './Home/Home';
import Tracker from './Tracker';
import Footer from './Footer';
import Blog from './Blog';

const Navbar = () => {
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
							<li className="list-items">
								<Link to="/login">Log In</Link>
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
};
export default Navbar;