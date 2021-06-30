import React from 'react';

import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import './App.scss';
import UsersTable from '../Pages/UsersTable';
import Login from '../Login';
import SingUp from '../SingUp';
import Header from '../Header';
import Fanfiction from '../Pages/Fanfiction';
import { useAuth } from '../../hooks/useAuth.hook';
import { AuthContext } from '../../context/AuthContext';



function App() {
    const { login, logout, token, userId, userName } = useAuth();
    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, userName, isAuthenticated 
        }}>
            <Container>
                <Row className='m-3'>
                    <Header />
                </Row>                
                <Router>
                    {!isAuthenticated
                        ? (
                            <>
                                <Switch>
                                    <Route path='/login'>
                                        <Login />
                                    </Route>
                                    <Route path='/singup'>
                                        <SingUp />
                                    </Route>
                                    <Redirect to='/login' />
                                </Switch>
                            </>
                        )
                        : (
                            <>
                                <Switch>
                                    <Route path='/' exact>
                                        <Fanfiction />
                                    </Route>
                                    <Route path='/users' exact>                    
                                        <UsersTable />
                                    </Route>                                
                                    <Redirect to="/" />
                                </Switch>       
                            </>
                        )}                
                </Router>
            </Container>            
        </AuthContext.Provider>   
  );
}

export default App;
