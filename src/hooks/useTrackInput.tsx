import React, { useState, useEffect } from 'react';
import { muscleGroupOptions } from '../constants/muscleExerciseSpecs';

export const useTrackInput = () => {
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

	return {
		exerciseNumbers,
		renderMuscles,
		renderExercisesPerMuscle,
		exerciseNumbersOnChange,
		setExerciseNumbers,
	};
};
