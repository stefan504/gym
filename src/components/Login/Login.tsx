import { useForm } from 'react-hook-form';
import './Login.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
function Login() {
	const isMember = false;
	return (
		<div className="form-container">
			{isMember ? <LoginForm /> : <SignUpForm />}
		</div>
	);
}
export default Login;
