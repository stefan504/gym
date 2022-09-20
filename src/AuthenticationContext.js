//1.
import React, { useEffect, useState } from 'react';
import firebaseInit from './firebaseSDK';
import 'firebase/auth';

//2.
export const AuthContext = React.createContext();

//3.
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebaseInit.auth().onAuthStateChanged(setUser);
	}, [user]);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
