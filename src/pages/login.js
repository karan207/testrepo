import React, { useState, useContext } from 'react';
import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const {auth, toggleAuth} = useContext(GlobalContext);

	const submitHandler = async (e) => {
		e.preventDefault();
		try{
			const res = await axios.post('user/login', { username, password } );
			const { message } = await res.data;
			if(message === "success"){
				const { data } = await res.data;
				const { _id } = data;
				localStorage.setItem('id', _id);
				setUsername("");
				setPassword("");
				toggleAuth();
			}
			else if(message === "user_not_available"){
				return(
					<Redirect to="/register" />
				);
			}
			else{
				alert('some error occured');
			}
		}
		catch(e){
			alert("check internet connection");
		}
	}

	if(!auth){

		return(
			<div>
				<form onSubmit={submitHandler}>
					<input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
					<input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
					<input type="submit" value="submit" />
				</form>
			</div>
		);

	}

	else{
		return(
			<Redirect to= "/" />
		);
	}

}

export default Login;
