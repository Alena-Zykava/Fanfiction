import React, { FC, useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';

import PersonAccount from '../PersonAccount';
import { AuthContext } from '../../context/AuthContext';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import icon from './icons_day.png';
import iconLogo from './icons8_book.png';



const Header: FC = () => {
    const history = useHistory();
    const { isAuthenticated } = useContext(AuthContext);    
    const { pathname } = useLocation();
    
    const PATH_LOGIN = '/login';
    const isLoginPage = pathname === PATH_LOGIN;

    const { switcher, themes, currentTheme } = useThemeSwitcher();

    const toggleDarkMode = () => {        
        switcher({ theme: currentTheme ==='dark' ? themes.light : themes.dark });
    };

    return (
        <>
        <Col sm={7} >
                <Link to="/">
                    <img src={iconLogo} alt="Book" />
                </Link>
            
        </Col>       
        {isAuthenticated ?
                <PersonAccount />
                : ( !isLoginPage &&
                    <Col className="d-flex justify-content-end">
                        <Button
                            onClick={() => history.push('/login')}>
                            Войти
                        </Button>
                    </Col>
                )}
            <Col className='d-flex justify-content-end'>
                <Button variant='secondary' onClick={toggleDarkMode}>
                    <img src={icon} alt="Icon" />
                </Button>
            </Col>
        
        </>
    )
}

export default Header;
