import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const UserAccessRouter: React.FC = () => {
    const path = '/';

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path='/' element={<MapPage />} />*/}
                <Route path='*' element={<Navigate to={path} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default UserAccessRouter;
