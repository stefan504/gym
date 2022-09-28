import React, { useState, useEffect } from 'react';
import { muscleGroupOptions } from '../../constants/muscleExerciseSpecs';

import { useTrackInput } from '../../hooks/useTrackInput';

type FilteredStateTypes = {
	track: Array<Object>;
	setTrack: Function;
	setFilteredState: Function;
};

const TrackInput: React.FC<FilteredStateTypes> = ({
	setFilteredState,
	track,
	setTrack,
}) => {
	const {
		exerciseNumbers,
		renderMuscles,
		renderExercisesPerMuscle,
		exerciseNumbersOnChange,
		setExerciseNumbers,
	} = useTrackInput();

	const [date, setDate] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e: any) => {
		if (
			exerciseNumbers.sets === '' ||
			exerciseNumbers.reps === '' ||
			date === '' ||
			exerciseNumbers.weight === '' ||
			exerciseNumbers.currentExercise === ''
		) {
			e.preventDefault();
			setError('All fields required.');
			setTimeout(() => setError(''), 2500);
			return;
		}
		e.preventDefault();

		track.length > 0
			? setTrack([
					{
						date: date,
						weight: exerciseNumbers.weight,
						reps: exerciseNumbers.reps,
						sets: exerciseNumbers.sets,
						exercise: exerciseNumbers.currentExercise,
						muscleGroup: exerciseNumbers.muscleGroup,
						id: Math.floor(Math.random() * 10000),
					},
					...track,
			  ])
			: setTrack([
					{
						date: date,
						weight: exerciseNumbers.weight,
						reps: exerciseNumbers.reps,
						sets: exerciseNumbers.sets,
						exercise: exerciseNumbers.currentExercise,
						muscleGroup: exerciseNumbers.muscleGroup,
						id: Math.floor(Math.random() * 10000),
					},
			  ]);

		setExerciseNumbers({
			...exerciseNumbers,
			sets: '',
			reps: '',
			weight: '',
		});
		setDate('');
	};

	const dateOnChange = (e: any) => {
		setDate(e.target.value);
	};

	const addFilter = (group: any) => {
		const filter = track.filter((trac: any) => trac.muscleGroup === group);

		if (filter.length === 0) return;
		setFilteredState(filter);
	};
	const clearFilters = () => {
		setFilteredState(null);
	};

	return (
		<>
			<div className="tracker-text">
				<h1>Fill the data to track your workouts.</h1>
			</div>
			<p className="error">{error}</p>
			<div className="inputs-container">
				<form onSubmit={handleSubmit}>
					<div className="input">
						<label htmlFor="">Date: </label>
						<input
							onChange={dateOnChange}
							type="date"
							value={date}
							name=""
							id=""
						/>
					</div>
					<div className="input">
						<label htmlFor="muscle-group">Muscle group: </label>
						<select
							value={exerciseNumbers.muscleGroup}
							onChange={exerciseNumbersOnChange}
							name="muscleGroup"
						>
							{/* MAP ALL OF THE BODY PARTS */}
							{exerciseNumbers.muscleGroup && renderMuscles()}
						</select>
					</div>
					<div className="input">
						<label>Exercise </label>
						<select
							onChange={exerciseNumbersOnChange}
							value={exerciseNumbers.currentExercise}
							name="currentExercise"
						>
							{exerciseNumbers.muscleGroup && renderExercisesPerMuscle()}
						</select>
					</div>
					<div className="input">
						<label>Weight(kg): </label>
						<input
							onChange={exerciseNumbersOnChange}
							name="weight"
							value={exerciseNumbers.weight}
							type="number"
						/>
					</div>
					<div className="input">
						<label>Sets: </label>
						<input
							onChange={exerciseNumbersOnChange}
							name="sets"
							value={exerciseNumbers.sets}
							type="number"
						/>
					</div>
					<div className="input">
						<label>Reps: </label>
						<input
							onChange={exerciseNumbersOnChange}
							name="reps"
							type="number"
							value={exerciseNumbers.reps}
						/>
					</div>
					<div className="submit">
						<input type="submit" value="Submit" />
					</div>
				</form>
				<div className="filter">
					<h2>Filter:</h2>
					<div className="grid">
						{muscleGroupOptions.map((muscleName) => {
							return (
								<button onClick={() => addFilter(muscleName.name)}>
									{muscleName.name}
								</button>
							);
						})}
						<button id="clear" onClick={clearFilters}>
							Clear
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrackInput;
