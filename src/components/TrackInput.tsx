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
	const [muscleGroup, setMuscleGroup] = useState(muscleGroupOptions[0].name);
	const [currentExercise, setCurrentExercise] = useState(
		muscleGroupOptions[0].exercises[0]
	);
	const [exerciseList, setExerciseList] = useState([
		...muscleGroupOptions[0].exercises,
	]);

	useEffect(() => {
		const filteredExercise = muscleGroupOptions.filter((muscle) => {
			return muscleGroup === muscle.name;
		});
		setExerciseList(filteredExercise[0].exercises);
	}, [muscleGroup, exerciseList]);
	const [date, setDate] = useState('');
	const [weight, setWeight] = useState('');
	const [sets, setSets] = useState('');
	const [reps, setReps] = useState('');

	const [error, setError] = useState('');

	const handleSubmit = (e: any) => {
		if (
			sets === '' ||
			reps === '' ||
			date === '' ||
			weight === '' ||
			currentExercise === ''
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
				weight: weight,
				reps: reps,
				sets: sets,
				exercise: currentExercise,
				muscleGroup: muscleGroup,
				id: Math.floor(Math.random() * 10000),
			},
			...track,
		]);

		setSets('');
		setReps('');
		setWeight('');
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

	const selectOnChange = (e: any) => {
		setMuscleGroup(e.target.value);
		setCurrentExercise(e.target.value);
	};

	const exerciseOnChange = (e: any) => {
		setCurrentExercise(e.target.value);
	};

	const repsOnChange = (e: any) => {
		setReps(e.target.value);
	};

	const weightOnChange = (e: any) => {
		setWeight(e.target.value);
	};

	const dateOnChange = (e: any) => {
		setDate(e.target.value);
	};

	const setsOnChange = (e: any) => {
		setSets(e.target.value);
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
							value={muscleGroup}
							onChange={selectOnChange}
							name="muscle-group"
						>
							{/* MAP ALL OF THE BODY PARTS */}
							{muscleGroup && renderMuscles()}
						</select>
					</div>
					<div className="input">
						<label>Exercise </label>
						<select
							onChange={exerciseOnChange}
							value={currentExercise}
							name="Exercise"
						>
							{muscleGroup && renderExercisesPerMuscle()}
						</select>
					</div>
					<div className="input">
						<label>Weight(kg): </label>
						<input onChange={weightOnChange} value={weight} type="number" />
					</div>
					<div className="input">
						<label>Sets: </label>
						<input onChange={setsOnChange} value={sets} type="number" />
					</div>
					<div className="input">
						<label>Reps: </label>
						<input onChange={repsOnChange} type="number" value={reps} />
					</div>
					<div className="submit">
						<input type="submit" value="Submit" />
					</div>
				</form>
				<div className="filter">
					<h2>Filter by:</h2>
					<div className="grid">
						{/* MAP ALL OF THE BODY PARTS */}
						<button onClick={() => addFilter('Chest')}>Chest</button>
						<button onClick={() => addFilter('Back')}>Back</button>
						<button onClick={() => addFilter('Legs')}>Legs</button>
						<button onClick={() => addFilter('Bicep')}>Bicep</button>
						<button onClick={() => addFilter('Tricep')}>Tricep</button>
						<button onClick={() => addFilter('Shoulders')}>Shoulders</button>
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
