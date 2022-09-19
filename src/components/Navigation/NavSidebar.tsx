import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';

const NavSidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useMediaQuery({
		query: '(max-width: 700px)',
	});

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav className="nav">
			<Link to="/" className="logo-container"></Link>
			{isMobile ? (
				<Menu right outerContainerId="App" isOpen={menuOpen}>
					<ul className="list">
						<li onClick={() => closeMenu()} className="list-items">
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
				</Menu>
			) : (
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
			)}
		</nav>
	);
};

export default NavSidebar;
