import React, { useState, useEffect } from 'react';
import Track from './Track';

const Tracker = () => {
	const muscleGroupOptions = {
		Chest: {
			exercises: [
				'Bench press',
				'Incline Dumbbell Flyes',
				'Dumbbell Bench Press',
				'Incline Bench press ',
				'Cable crossover',
			],
			description: 'wtf',
		},
		Back: {
			exercises: [
				'Deadlift',
				'Barbell Bent-over Row',
				'Dumbell rows',
				'V-Bar pulldown',
			],
			description: 'wtf',
		},
		Legs: {
			exercises: ['Barbell squats', 'Leg press', 'Leg curl', 'Leg extension'],
			description: 'wtf',
		},
		Shoulders: {
			exercises: [
				'Standing Overhead Barbell Press',
				'Arnold Press',
				'Dumbell Lateral Raises',
				'Front Raise',
			],
			description: 'wtf',
		},
		Bicep: {
			exercises: [
				'Dumbell Curls',
				'Barbell Curls',
				'Hammer Curls',
				'Cable Curls',
			],
			description: 'wtf',
		},
		Tricep: {
			exercises: [
				'Close Grip Bench Press',
				'Skull Crushers',
				'Dumbbell Triceps Extensions',
				'Dips',
				'Cable extensions',
			],
			description: 'wtf',
		},
	};
	const exercisesPerMuscle = {
		Chest: [],
		Back: [],
		Tricep: [],
		Bicep: [],
		Shoulders: [],
		Legs: [],
	};
	const [filteredState, setFilteredState] = useState(null);
	const [muscleGroup, setMuscleGroup] = useState(muscleGroupOptions[0]);
	const [exercise, setExercise] = useState(exercisesPerMuscle?.muscleGroup);
	const [date, setDate] = useState('');
	const [weight, setWeight] = useState('');
	const [sets, setSets] = useState('');
	const [reps, setReps] = useState('');

	const [track, setTrack] = useState([]);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		if (
			sets === '' ||
			reps === '' ||
			date === '' ||
			weight === '' ||
			exercise === ''
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
				exercise: exercise,
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
	const data2 = JSON.parse(data);
	useEffect(() => {
		setTrack(data2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//

	const selectOnChange = (e) => {
		setMuscleGroup(e.target.value);
		setExercise(e.target.value);
	};

	const exerciseOnChange = (e) => {
		setExercise(e.target.value);
	};

	const repsOnChange = (e) => {
		setReps(e.target.value);
	};

	const weightOnChange = (e) => {
		setWeight(e.target.value);
	};

	const dateOnChange = (e) => {
		setDate(e.target.value);
	};

	const setsOnChange = (e) => {
		setSets(e.target.value);
	};

	console.log(exercisesPerMuscle);
	const renderOptions = () => {
		// ALL OF EXERCISES PER MUSCLE SHOULD BE IN DATABASE AND YOU SHOULD MAP THROUGH THEM WHEN RENDERING
		return exercisesPerMuscle[muscleGroup].map((exerciseName) => {
			return (
				<>
					<option value={exerciseName}>{exerciseName}</option>
				</>
			);
		});
	};
	const addFilter = (group) => {
		const filter = track.filter((trac) => trac.muscleGroup === group);

		if (filter.length === 0) return;
		setFilteredState(filter);
	};
	const clearFilters = () => {
		setFilteredState(null);
	};

	return (
		<>
			<div className="tracker-container">
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
							{' '}
							<label htmlFor="muscle-group">Muscle group: </label>
							<select
								value={muscleGroup}
								onChange={selectOnChange}
								name="muscle-group"
							>
								{/* MAP ALL OF THE BODY PARTS */}
								<option value="Chest">Chest</option>
								<option value="Back">Back</option>
								<option value="Tricep">Tricep</option>
								<option value="Bicep">Bicep</option>
								<option value="Legs">Legs</option>
								<option value="Shoulders">Shoulders</option>
							</select>
						</div>
						<div className="input">
							<label>Exercise </label>
							<select
								onChange={exerciseOnChange}
								value={exercise}
								name="Exercise"
							>
								{muscleGroup && renderOptions()}
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
						{' '}
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
				</div>{' '}
				*/ MOVE ALL THIS TO ANOTHER COMPONENT CALLED trackerInput.ts/*
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
