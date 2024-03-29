import './Login.css';
import LoginForm from './LoginForm';
import { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import SignUpForm from './SignUpForm';

function Login() {
	const auth = getAuth();
	const user = auth.currentUser;
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
		isLoggedIn: false,
	});

	signInWithEmailAndPassword(
		auth,
		userCredentials.email,
		userCredentials.password
	)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// https://firebase.google.com/docs/reference/js/firebase.User
			return <Link to="/" />;
		} else {
			console.log('LOGGED OUT');
		}
	});

	const isMember = false;
	console.log(user);
	return !user ? (
		<div className="form-container">
			<div className="background">
				<div className="shape"></div>
				<div className="shape"></div>
			</div>
			{!isMember ? (
				<LoginForm
					setUserCredentials={setUserCredentials}
					userCredentials={userCredentials}
				/>
			) : (
				<SignUpForm
					setUserCredentials={setUserCredentials}
					userCredentials={userCredentials}
				/>
			)}
		</div>
	) : (
		<Route exact path="/identity">
			<Redirect to="/" />
		</Route>
	);
}
export default Login;
