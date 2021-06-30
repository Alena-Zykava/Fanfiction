import React, { FC } from 'react';
import { Button, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header: FC = ({history: any}) => {
    const handlerClick = () => {
        history.push('/login')
    }
    return (
        <Col className='d-flex justify-content-between'>
            <a href="/">Logo</a>
            <Button onClick={handlerClick}>Войти</Button>
        </Col>       

    )
}

export default withRouter(Header);
