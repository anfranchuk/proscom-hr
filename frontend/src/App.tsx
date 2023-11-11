import React, { useEffect } from 'react';
import './App.css';
import UserAccessRouter from './routes/UserAccessRouter';
import NoAccessRouter from './routes/NoAccessRouter';
import autorizeState from './store/accoutState/autorizeState';

const App: React.FC = observer(() => {
	const { isAuthorize } = autorizeState;
	const [isAuth, setIsAutorize] = React.useState(false);

	useEffect(() => {
		setIsAutorize(isAuthorize);
	}, [isAuthorize])

	const routes = {
		true: <UserAccessRouter />,
		false: <NoAccessRouter />,
	};

	return routes[`${isAuth}`];
});

export default App;
