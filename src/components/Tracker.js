import React, { useState, useEffect } from 'react';
import Track from './Track';

const Tracker = () => {
	const [filteredState, setFilteredState] = useState(null);
	const [muscleGroup, setMuscleGroup] = useState('Chest');
	const [exercise, setExercise] = useState('Bench Press');
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
		setExercise('Bench Press');
		setMuscleGroup('Chest');
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
		if (e.target.value === 'Chest') {
			setMuscleGroup('Chest');
			setExercise('Bench press');
		}
		if (e.target.value === 'Back') {
			setMuscleGroup('Back');
			setExercise('Deadlift');
		}
		if (e.target.value === 'Legs') {
			setMuscleGroup('Legs');
			setExercise('Barbell squats');
		}
		if (e.target.value === 'Tricep') {
			setMuscleGroup('Tricep');
			setExercise('Close Grip Bench Press');
		}
		if (e.target.value === 'Bicep') {
			setMuscleGroup('Bicep');
			setExercise('Dumbell Curls');
		}
		if (e.target.value === 'Shoulders') {
			setMuscleGroup('Shoulders');
			setExercise('Standing Overhead Barbell Press');
		}
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

	const renderOptions = () => {
		if (muscleGroup === 'Bicep') {
			return (
				<>
					<option value="Dumbell Curls">Dumbell Curls</option>
					<option value="Barbell Curls">Barbell Curls </option>;
					<option value="Hammer Curls">Hammer Curls </option>;
					<option value="Cable Curls">Cable Curls </option>;
				</>
			);
		}
		if (muscleGroup === 'Tricep') {
			return (
				<>
					<option value="Close Grip Bench Press">Close Grip Bench Press</option>
					<option value="Skull Crushers">Skull Crushers </option>;
					<option value="Dumbbell Triceps Extensions">
						Dumbbell Triceps Extensions{' '}
					</option>
					;<option value="Dipss">Dips </option>;
					<option value="Cable extensions">Cable extensions </option>;
				</>
			);
		}
		if (muscleGroup === 'Chest') {
			return (
				<>
					<option value="Bench press">Bench press</option>
					<option value="Incline Dumbbell Flyes">
						Incline Dumbbell Flyes{' '}
					</option>
					;<option value="Dumbbell Bench Press">Dumbbell Bench Press </option>;
					<option value="Incline Bench press ">Incline Bench press </option>;
					<option value="Cable crossover">Cable crossover</option>;
				</>
			);
		}
		if (muscleGroup === 'Back') {
			return (
				<>
					<option value="Deadlift">Deadlift</option>
					<option value="Barbell Bent-over Row">Barbell Bent-over Row</option>;
					<option value="Dumbell rows">Dumbell rows</option>;
					<option value="V-Bar pulldown">V-Bar pulldown </option>;
				</>
			);
		}
		if (muscleGroup === 'Legs') {
			return (
				<>
					<option value="Barbell squats">Barbell squats</option>
					<option value="Leg press">Leg press</option>;
					<option value="Leg curl">Leg curl</option>;
					<option value="Leg extension">Leg extension</option>;
				</>
			);
		}
		if (muscleGroup === 'Shoulders') {
			return (
				<>
					<option value="Standing Overhead Barbell Press">
						Standing Overhead Barbell Press
					</option>
					<option value="Arnold Press">Arnold Press</option>;
					<option value="Dumbell Lateral Raises">Dumbell Lateral Raises</option>
					;<option value="Front Raise">Front Raise</option>;
				</>
			);
		}
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
								{renderOptions()}
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
