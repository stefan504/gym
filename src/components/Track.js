import React from 'react';

const Track = ({ filteredState, track, setTrack }) => {
	const deleteTrack = (e, id) => {
		e.preventDefault();

		const newTrack = track.filter((trac) => trac.id !== id);
		setTrack(newTrack);
		console.log(track);
	};

	if (filteredState === null) {
		return (
			<div className="track">
				{track.map((trac) => {
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
				{filteredState.map((filter) => {
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
};

export default Track;
