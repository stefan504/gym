import React from 'react';
import './Track.css';

type FilteredStateTypes = {
	filteredState: Array<Object> | null;
	track: Array<Object>;
	setTrack: Function;
};

const Track: React.FC<FilteredStateTypes> = ({
	filteredState,
	track,
	setTrack,
}) => {
	const deleteTrack = (e: any, id: string) => {
		e.preventDefault();
		const newTrack = track.filter((trac: any) => trac.id !== id);
		setTrack(newTrack);
	};

	if (filteredState === null) {
		return (
			<div className="track">
				{track.map((trac: any) => {
					return (
						<div
							key={Math.floor(Math.random() * 120000)}
							className="track-container"
						>
							<span onClick={(e) => deleteTrack(e, trac.id)} className="delete">
								&#10005;
							</span>
							<span className="color"></span>
							<div className="info">
								<h2>
									Muscle group:{' '}
									<span className="color">{trac.muscleGroup}</span>
								</h2>
								<h3>
									Exercise: <span className="color">{trac.exercise}</span>
								</h3>
								<h4>
									Weight: <span className="color">{trac.weight}kg</span>
								</h4>
								<p>
									Sets: <span className="color">{trac.sets}</span>
								</p>
								<p>
									Reps: <span className="color">{trac.reps}</span>
								</p>
							</div>
							<div className="date">
								<h3>
									<span className="color">{trac.date}</span>
								</h3>
							</div>
						</div>
					);
				})}
			</div>
		);
	} else if (filteredState.length > 0) {
		return (
			<div className="track">
				{filteredState.map((filter: any) => {
					return (
						<div
							key={Math.floor(Math.random() * 120000)}
							className="track-container"
						>
							<span
								onClick={(e) => deleteTrack(e, filter.id)}
								className="delete"
							>
								&#10005;
							</span>
							<span className="color"></span>
							<div className="info">
								<h2>
									Muscle group:{' '}
									<span className="color">{filter.muscleGroup}</span>
								</h2>
								<h3>
									Exercise: <span className="color">{filter.exercise}</span>
								</h3>
								<h4>
									Weight: <span className="color">{filter.weight}kg</span>
								</h4>
								<p>
									Sets: <span className="color">{filter.sets}</span>
								</p>
								<p>
									Reps: <span className="color">{filter.reps}</span>
								</p>
							</div>
							<div className="date">
								<h3>
									<span className="color">{filter.date}</span>
								</h3>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
	return null;
};

export default Track;
