import { useForm } from 'react-hook-form';
import './Login.css';

const LoginForm = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h3>Login Here</h3>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				placeholder="Email or Phone"
				id="email"
				{...register('email', { required: true })}
			/>

			<label htmlFor="password">Password</label>
			<input
				type="password"
				placeholder="Password"
				id="password"
				{...register('password', { required: true })}
			/>
			<a className="link" href="#">
				Don't have an account yet?{' '}
				<span className="link-highlight">Sign Up</span>
			</a>
			<button className="form-submit" type="submit">
				Log In
			</button>
			<div className="social">
				<div className="go">
					<i className="fab fa-google"></i> Google
				</div>
				<div className="fb">
					<i className="fab fa-facebook"></i> Facebook
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
