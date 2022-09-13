import { Link } from 'react-router-dom';
import BenefitsShowcase from '../Benefits/BenefitsShowcase';
import './Home.css';

const Home = () => {
	return (
		<div className="container">
			{' '}
			<div className="home-container">
				<div className="home-text">
					<h1>
						TRACK YOUR<span className="yellow-letters"> PROGRESS</span>.
						<br></br>MAKE <span className="yellow-letters">GAINS</span>.
					</h1>
					<div className="button-container">
						<Link className="button" to="/tracker">
							Workout Plans
						</Link>
						<Link className="button button-second" to="/tracker">
							Tracker
						</Link>
					</div>
				</div>
			</div>
			<BenefitsShowcase />
		</div>
	);
};

export default Home;
