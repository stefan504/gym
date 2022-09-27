import { useState, useEffect } from 'react';
import Track from '../Track/Track';
import TrackInput from '../Track/TrackInput';
import './Tracker.css';
const Tracker = () => {
	const [filteredState, setFilteredState] = useState(null);
	const [track, setTrack] = useState([]);
	// LOCAL STORAGE SETUP
	useEffect(() => {
		localStorage.setItem('track', JSON.stringify(track || []));
	}, [track]);

	const data: any = localStorage.getItem('track');
	const data2 = JSON.parse(data);
	useEffect(() => {
		setTrack(data2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="tracker-container">
				<TrackInput
					setFilteredState={setFilteredState}
					track={track}
					setTrack={setTrack}
				/>
				<Track
					filteredState={filteredState}
					track={track}
					setTrack={setTrack}
				/>
			</div>
		</>
	);
};

export default Tracker;
