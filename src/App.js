import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './firebaseSDK';
import Navbar from './components/Navigation/Navbar';
try {
	firebase.initializeApp(firebaseConfig);
} catch (e) {
	console.log(e);
}
function App() {
	return (
		<div id="App">
			<Navbar />
		</div>
	);
}

export default App;
