import React from 'react';
import './Track.css';
import chestImage from '../../img/chest1.png';

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

	const isFiltered = filteredState === null ? track : filteredState;

	return (
		<div className="track">
			{isFiltered?.map((trac: any) => {
				return (
					<div
						key={Math.floor(Math.random() * 120000)}
						className="track-container"
					>
						<div className="image-container">
							<img className="body-image" src={chestImage} alt="" />
							<span onClick={(e) => deleteTrack(e, trac.id)} className="delete">
								&#10005;
							</span>
						</div>

						<div className="info">
							<div className="exercise-info">
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
					</div>
				);
			})}
		</div>
	);
};

export default Track;
