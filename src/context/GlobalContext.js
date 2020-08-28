import React, { useReducer, createContext } from 'react';
import AppReducer from './appReducer';

const initialState = {
	auth: localStorage.getItem('id')?true:false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const toggleAuth = (id, name) => {
		dispatch({
			type: "TOGGLE_AUTH",
		});
	}

	const providerValues = {
		auth: state.auth,
		toggleAuth
	}

	return(
		<GlobalContext.Provider value= {providerValues}>
			{children}
		</GlobalContext.Provider>
	);
}