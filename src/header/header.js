import React, { useContext } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';

const Header = () => {

	const { auth } = useContext(GlobalContext);

	return(
		<div>
			<Link to="/">Home</Link>
			{auth && <Link to="/logout">Logout</Link>}
			{
				!auth &&
				<React.Fragment>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</React.Fragment>
			}	
			
		</div>
	);

}

export default Header;