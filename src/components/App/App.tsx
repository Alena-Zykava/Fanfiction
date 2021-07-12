import React from 'react';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

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
import Message from '../Message';
import Administration from '../Pages/Administration';
import { lightTheme, darkTheme } from '../../constants/constants';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};


function App() {
    const { login, logout, token, userId, userName, userRoles } = useAuth();
    const isAuthenticated = !!token;
    const isAdmin = userRoles?.indexOf('ADMIN') !== -1;
    const defaultTheme = localStorage.getItem('currentTheme') || 'dark';    
    
    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, userName, isAuthenticated, isAdmin
        }}>
            <ThemeSwitcherProvider defaultTheme={defaultTheme} themeMap={themes}>
                <Router>
                <Container className='pb-3 pt-3'>
                    <Row className='mb-3 align-items-center'>
                        <Header />
                    </Row>
                    <Row>
                        <Message />
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
                    {isAdmin &&
                            <Route path='/administration'>
                                <Administration />
                            </Route>
                   }
                </Container>
            </Router>    
            </ThemeSwitcherProvider>            
        </AuthContext.Provider>   
  );
}

export default App;
