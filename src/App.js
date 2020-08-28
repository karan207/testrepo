import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import { GlobalProvider } from './context/GlobalContext.js';

import Header from './header/header.js';
import Register from './pages/register.js';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Logout from './pages/logout.js';

function App() {
  return (
    <GlobalProvider>
      <div>
      	<Router>
      		<Header /> 
      		<Route exact path="/" component={Home} />
      		<Route exact path="/login" component={Login} />
      		<Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
        	</Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
