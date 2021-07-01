import React, { FC, useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import PersonAccount from '../PersonAccount';
import { AuthContext } from '../../context/AuthContext';


const Header: FC = () => {
    const history = useHistory();
    const { isAuthenticated } = useContext(AuthContext);
    
    const handlerClick = () => {
        history.push('/login');
    }
    return (
        <Col className='d-flex justify-content-between'>
            <a href="/">Logo</a>
            {isAuthenticated
                ? <PersonAccount />
                : <Button onClick={handlerClick}>Войти</Button>}
            
        </Col>       

    )
}

export default Header;
