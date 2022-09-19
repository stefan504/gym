import { useForm } from 'react-hook-form';
import './Login.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
function Login() {
	const isMember = false;
	return (
		<div className="form-container">
			<div className="background">
				<div className="shape"></div>
				<div className="shape"></div>
			</div>
			{isMember ? <LoginForm /> : <SignUpForm />}
		</div>
	);
}
export default Login;
