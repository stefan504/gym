// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyBpU16g6Od8_efmwXIv1smKk7nECfk2tzQ',
	authDomain: 'gym-tracker-4b4ca.firebaseapp.com',
	projectId: 'gym-tracker-4b4ca',
	storageBucket: 'gym-tracker-4b4ca.appspot.com',
	messagingSenderId: '769815576270',
	appId: '1:769815576270:web:39c94bbb301bac3da81a9f',
	measurementId: 'G-BK4CSJSBLK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const useAuthenticate = getAuth(app);
