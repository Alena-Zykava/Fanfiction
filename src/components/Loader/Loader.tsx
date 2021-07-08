import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Row>
            <Col className='d-flex justify-content-center'>
                <Spinner animation="border"/>
            </Col>
        </Row>     
    )
}

export default Loader;