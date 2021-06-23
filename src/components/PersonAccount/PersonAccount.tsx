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
        <Col sm={4} className='d-flex justify-content-between align-items-center'>
            <i className="bi bi-person-circle" />
            <span>{ auth.userName }</span>
            <Link to='/login'>
                <Button
                    variant='outline-primary'
                    onClick={onLogOut}>
                    Log out
                </Button>
            </Link>
        </Col>
    )
}

export default PersonAccount;