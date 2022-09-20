import './App.css';
import Navbar from './components/Navigation/Navbar';
import { AuthProvider } from './AuthenticationContext';

function App() {
	return (
		<AuthProvider>
			<div id="App">
				<Navbar />
			</div>
		</AuthProvider>
	);
}

export default App;
