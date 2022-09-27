import { useState, useEffect } from 'react';
import Track from '../Track/Track';
import TrackInput from '../Track/TrackInput';
import './Tracker.css';
const Tracker = () => {
	const [filteredState, setFilteredState] = useState(null);
	const [track, setTrack] = useState([]);
	useEffect(() => {
		localStorage.setItem('track', JSON.stringify(track));
	}, [track]);

	const data = localStorage.getItem('track');
	useEffect(() => {
		console.log(data);
		const data2 = JSON.parse(data!);
		setTrack(data2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//

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
