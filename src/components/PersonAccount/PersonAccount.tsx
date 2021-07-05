import React, { FC, useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PersonAccount: FC = () => {
    const auth = useContext(AuthContext);

    const onLogOut = () => {
        auth.logout();
    }

    return (
        <>
        <Col className='d-flex justify-content-end align-items-center'>
            <Link to='/my_page'>
                <div>
                    <i className="bi bi-person-circle" />
                    <span>{ auth.userName }</span>
                </div>                
            </Link>
        </Col>  
        <Col>
            <Link to='/login'>
                <Button
                    variant='outline-primary'
                    onClick={onLogOut}>
                    Log out
                </Button>
            </Link>
        </Col>
        </>    
       
    )
}

export default PersonAccount;