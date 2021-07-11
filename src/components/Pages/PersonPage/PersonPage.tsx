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
                <Col className='d-flex justify-content-between pb-3'>
                    <ButtonGroup                        
                        onClick={() => history.push('/add_fanfic')}>
                        <Button variant='outline-success'>
                            <i className='bi bi-plus-lg'/>
                        </Button>
                        <Button variant='success'>      
                            Добавить фанфик 
                        </Button>
                    </ButtonGroup>

                    <Button
                        variant='secondary'
                        onClick={() => history.push('/administration')}
                    >
                            Администрирование
                        </Button>
                    
                </Col>
            </Row>
            <UserFanficsPage />
        </>
    )
}

export default PersonPage;
