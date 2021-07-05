import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import UserFanficsPage from '../UserFanficsPage';

const PersonPage = () => {
    const history = useHistory();
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h2>Мои фанфики</h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end'>
                    <ButtonGroup
                        className='pb-3'
                        onClick={() => history.push('/add_fanfic')}>
                        <Button variant='outline-success'>
                            <i className='bi bi-plus-lg'/>
                        </Button>
                        <Button variant='success'>      
                            Добавить фанфик 
                        </Button>
                    </ButtonGroup>
                    
                </Col>
            </Row>
            <UserFanficsPage />
        </>
    )
}

export default PersonPage;
