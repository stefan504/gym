import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'; // make seperate css file for signupform tsx
import { Link } from 'react-router-dom';

interface IFormInput {
	email: string;
	password: string;
	password_repeat: string;
}

const LoginForm = ({
	setUserCredentials,
	userCredentials,
}: {
	setUserCredentials: any;
	userCredentials: any;
}) => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit = (data: any) => {
		console.log(data);
		setUserCredentials({
			...userCredentials,
			email: data.email,
			password: data.password,
		});
	};

	const auth = getAuth();
	createUserWithEmailAndPassword(
		auth,
		userCredentials.email,
		userCredentials.password
	)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});

	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log('HE IS LOGGED IN');
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			return <Link to="" />;
			// ...
		} else {
			console.log('HE IS LOGGED OUT');

			// User is signed out
			// ...
		}
	});

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h3>Sign Up Here</h3>
			<label htmlFor="email">Email</label>
			<input
				className="login-input"
				type="email"
				placeholder="Email or Phone"
				id="email"
				{...register('email', { required: true })}
			/>

			<label htmlFor="password">Password</label>
			<input
				className="login-input"
				type="password"
				placeholder="Password"
				id="password-repeat"
				{...register('password', { required: true })}
			/>
			<input
				className="login-input"
				type="password"
				placeholder="Repeat Password"
				id="password"
				{...register('password_repeat', { required: true })}
			/>
			<a className="link" href="#">
				Already a Member? <span className="link-highlight">Log in</span>
			</a>
			<button className="form-submit" type="submit">
				Sign Up
			</button>
			<div className="social">
				<div className="go">
					<i className="fab fa-google"></i> Google
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
