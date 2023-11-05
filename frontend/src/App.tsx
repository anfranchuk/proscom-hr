import React from 'react';
import './App.css';
import UserAccessRouter from './routes/UserAccessRouter';
import NoAccessRouter from './routes/NoAccessRouter';

function App() {
  const isAuthorize = true;

  const routes = {
    true: <UserAccessRouter />,
    false: <NoAccessRouter />,
  };

  return routes[`${isAuthorize}`];
}

export default App;
