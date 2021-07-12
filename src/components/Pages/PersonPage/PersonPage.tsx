import React, { FC, useContext } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import UserFanficsPage from '../UserFanficsPage';

const PersonPage: FC = () => {
    const history = useHistory();
    const { isAdmin } = useContext(AuthContext);
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h2>Мои фанфики</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className='d-flex justify-content-between pb-3 flex-wrap'>
                    <ButtonGroup
                        className='mt-3'
                        onClick={() => history.push('/add_fanfic')}>
                        <Button
                            variant='outline-success'>
                            <i className='bi bi-plus-lg'/>
                        </Button>
                        <Button variant='success'>      
                            Добавить фанфик 
                        </Button>
                    </ButtonGroup>

                    {isAdmin &&
                        <Button
                            className='mt-3'
                            variant='secondary'
                            onClick={() => history.push('/administration')}
                        >
                            Администрирование
                        </Button>}
                    
                </Col>
            </Row>
            <UserFanficsPage />
        </>
    )
}

export default PersonPage;
