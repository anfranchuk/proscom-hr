import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../components/Header/Header';
import Account from '../pages/AccountPage/AccountPage';
import TestPage from '../pages/TestPage/TestPage';

const UserAccessRouter: React.FC = () => {
	const path = '/';

	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path='/account' element={<Account />} />
				<Route path='/tests' element={<TestPage />} />
				<Route path='/tasks' element={<Account />} />
				<Route path='/shop' element={<Account />} />
				<Route path='/shop' element={<Account />} />
				<Route path='/coworkers' element={<Account />} />
				<Route path='*' element={<Navigate to={path} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default UserAccessRouter;
