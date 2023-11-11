import React from 'react';
import './App.css';
import UserAccessRouter from './routes/UserAccessRouter';
import NoAccessRouter from './routes/NoAccessRouter';
import autorizeState from './store/accoutState/autorizeState';

function App() {
	const { isAuthorize } = autorizeState;
	console.log(isAuthorize);

	const isAuthorizeFix = true;

	const routes = {
		true: <UserAccessRouter />,
		false: <NoAccessRouter />,
	};

	return routes[`${isAuthorizeFix}`];
}

export default App;
