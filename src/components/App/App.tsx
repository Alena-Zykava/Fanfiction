import React from 'react';

import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.scss';
import UsersTable from '../UsersTable';
import Login from '../Login';
import SingUp from '../SingUp';
import { useAuth } from '../../hooks/useAuth.hook';
import { AuthContext } from '../../context/AuthContext';



function App() {
    const { login, logout, token, userId, userName } = useAuth();
    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, userName, isAuthenticated 
        }}>
            <Router>
                {!isAuthenticated
                    ? (
                        <>
                            <Switch>
                                <Route path='/login'>
                                    <Login />
                                </Route>
                                <Route path='/' exact>
                                    <SingUp />
                                </Route>
                                <Redirect to='/login' />
                            </Switch>
                        </>
                    )
                    : (
                        <>
                            <Switch>                                
                                <Route path='/users'>                    
                                        <UsersTable />
                                </Route>                                
                                <Redirect to="/users" />
                            </Switch>       
                        </>
                    )}                
            </Router>
        </AuthContext.Provider>   
  );
}

export default App;
