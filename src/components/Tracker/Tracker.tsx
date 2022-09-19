import { useState } from 'react';
import Track from '../Track/Track';
import TrackInput from '../Track/TrackInput';
import './Tracker.css';
const Tracker = () => {
	const [filteredState, setFilteredState] = useState(null);
	const [track, setTrack] = useState([]);

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
