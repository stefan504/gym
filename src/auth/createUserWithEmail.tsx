import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
const email = 'stefan@s.com';
const password = '123';
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});

createUserWithEmailAndPassword(auth, 'stefan.ilic5044@gmail.com', '123');
