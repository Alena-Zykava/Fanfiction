import React, { FC, useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import PersonAccount from '../PersonAccount';
import { AuthContext } from '../../context/AuthContext';


const Header: FC = () => {
    const history = useHistory();
    const { isAuthenticated } = useContext(AuthContext);    
    const { pathname } = useLocation();
    
    const PATH_LOGIN = '/login';
    const isLoginPage = pathname === PATH_LOGIN;

    return (
        <>
        <Col sm={7} >
            <a href="/">Logo</a>           
            
        </Col>       
        {isAuthenticated
                        ? <PersonAccount />
                : ( !isLoginPage &&
                    <Col className="d-flex justify-content-end">
                        <Button
                            onClick={() => history.push('/login')}>
                            Войти
                        </Button>
                    </Col>
                    )}
            </>
    )
}

export default Header;
