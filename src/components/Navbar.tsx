import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from './Home/Home';
import Tracker from './Tracker';
import Footer from './Footer';
import Blog from './Blog';
import NavSidebar from './NavSidebar';
const Navbar = () => {
	return (
		<Router>
			<NavSidebar />

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
		</Router>
	);
};
export default Navbar;
