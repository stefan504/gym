import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Home from '../Home/Home';
import Tracker from '../Tracker/Tracker';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
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
