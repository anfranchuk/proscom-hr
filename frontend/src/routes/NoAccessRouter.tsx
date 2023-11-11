import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SigninPage from '../pages/SigninPage/SigninPage';

const NoAccessRouter: React.FC = () => {
	const path = '/signin';

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/signin' element={<SigninPage />} />
				<Route path='*' element={<Navigate to={path} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default NoAccessRouter;
