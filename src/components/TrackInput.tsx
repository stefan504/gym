import React, { useState, useEffect } from 'react';
import { muscleGroupOptions } from '../constants/muscleExerciseSpecs';

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
	const [exerciseNumbers, setExerciseNumbers] = useState({
		sets: '',
		reps: '',
		weight: '',
		muscleGroup: muscleGroupOptions[0].name,
		currentExercise: muscleGroupOptions[0].exercises[0],
	});
	const [exerciseList, setExerciseList] = useState([
		...muscleGroupOptions[0].exercises,
	]);

	useEffect(() => {
		const filteredExercise = muscleGroupOptions.filter((muscle) => {
			return exerciseNumbers.muscleGroup === muscle.name;
		});
		setExerciseList(filteredExercise[0]?.exercises);
	}, [exerciseNumbers.muscleGroup, exerciseList]);
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
		setTrack([
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
		]);

		setExerciseNumbers({
			...exerciseNumbers,
			sets: '',
			reps: '',
			weight: '',
		});
		setDate('');
	};

	// LOCAL STORAGE SETUP
	useEffect(() => {
		localStorage.setItem('track', JSON.stringify(track));
	}, [track]);

	const data = localStorage.getItem('track');
	const data2 = JSON.parse(data || '');
	useEffect(() => {
		setTrack(data2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//

	const dateOnChange = (e: any) => {
		setDate(e.target.value);
	};

	const exerciseNumbersOnChange = (e: any) => {
		setExerciseNumbers((current) => ({
			...current,
			[e.target.name]: e.target.value,
		}));
	};

	const renderExercisesPerMuscle = () => {
		return exerciseList.map((exerciseName) => {
			return (
				<option key={exerciseName} value={exerciseName}>
					{exerciseName}
				</option>
			);
		});
	};

	const renderMuscles = () => {
		return muscleGroupOptions.map((muscle) => {
			return (
				<option key={muscle.name} value={muscle.name}>
					{muscle.name}
				</option>
			);
		});
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
					<h2>Filter by:</h2>
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
