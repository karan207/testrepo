import React,{ useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';

const Logout = () => {

	const { auth, toggleAuth } = useContext(GlobalContext);

	useEffect(() => {
		if(auth){
			localStorage.removeItem('uname');
			toggleAuth();
			console.log('test');
		}
	}, []);

	if(!auth){
		return <Redirect to="/login" />
	}
	else{
		return null;
	}
}

export default Logout;