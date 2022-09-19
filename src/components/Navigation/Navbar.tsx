import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Home from '../Home/Home';
import Tracker from '../Tracker/Tracker';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import NavSidebar from './NavSidebar';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Navbar = () => {
	return (
		<Router>
			<NavSidebar />

			{/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
			<div className="app-container">
				<Switch>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/tracker">
						<Tracker />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};
export default Navbar;
