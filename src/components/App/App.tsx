import React from 'react';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import './App.scss';
import "bootswatch/dist/solar/bootstrap.min.css";

import UsersTable from '../Pages/UsersTable';
import Login from '../Login';
import SingUp from '../SingUp';
import Header from '../Header';
import Fanfiction from '../Pages/Fanfiction';
import { useAuth } from '../../hooks/useAuth.hook';
import { AuthContext } from '../../context/AuthContext';
import FanficPage from '../Pages/FanficPage';
import PersonPage from '../Pages/PersonPage';
import NewFanficPage from '../Pages/NewFanficPage';
import UserFanficsPage from '../Pages/UserFanficsPage';
import UpdateFanfinc from '../Pages/UpdataFanfic';



function App() {
    const { login, logout, token, userId, userName } = useAuth();
    const isAuthenticated = !!token;

    
    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, userName, isAuthenticated 
        }}>            
            <Router>
                <Container>
                    <Row className='m-3'>
                        <Header />
                    </Row>
                    <Route path='/' exact>
                        <Fanfiction />
                    </Route>
                    <Route path='/fanfic/:id'>
                        <FanficPage />
                    </Route>
                
                    {!isAuthenticated 
                        ? (
                            <>                                
                                <Switch>
                                    <Route path='/login' exact>
                                        <Login />
                                    </Route>
                                    <Route path='/singup' exact>
                                        <SingUp />
                                    </Route>
                                    {/* <Redirect to='/' /> */}
                                </Switch>
                            </>
                        )
                        : ( 
                            <>
                                <Switch>                                    
                                    <Route path='/users' exact>                    
                                        <UsersTable />
                                    </Route>
                                    <Route path='/my_page'>
                                        <PersonPage />
                                    </Route>
                                    <Route path='/add_fanfic'>
                                        <NewFanficPage />
                                    </Route>
                                    <Route path='/my_fanfics'>
                                        <UserFanficsPage />
                                    </Route>
                                    <Route path='/update_fanfic/:id'>
                                        <UpdateFanfinc />
                                    </Route>
                                    {/* <Redirect to="/" /> */}
                                </Switch>       
                            </>
                        )}                     
                </Container>
            </Router>    
        </AuthContext.Provider>   
  );
}

export default App;
