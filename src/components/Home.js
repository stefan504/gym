import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-text">
				<h1>
					TRACK YOUR PROGRESS.<br></br>MAKE GAINS.
				</h1>
				<div className="button-container">
					<Link className="button" to="/tracker">
						GET STARTED
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
