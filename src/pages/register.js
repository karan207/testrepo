import React, { useState, useContext } from 'react';
import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';

const Register = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { auth, toggleAuth } = useContext(GlobalContext);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('user/register', { username, password });
			const { message } = await res.data;
			if (message === 'success') {
				const { data } = await res.data;
				const { _id } = data;
				localStorage.setItem('id', _id);
				setUsername("");
				setPassword("");
				toggleAuth();
			} else if (message === 'username_taken'){
				alert("Username is already taken by someone, please try another");
			} else {
				alert("Some error occured");
			}
		} catch(error) {
			alert(error);
		}
	}

	if (!auth) {
		return(
			<div>
				<form onSubmit={submitHandler}>
					<input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
					<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
					<input type="submit" value="login" />
				</form>
			</div>
		);
	} else {
		return(
			<Redirect to="/" />
		);
	}
}

export default Register;