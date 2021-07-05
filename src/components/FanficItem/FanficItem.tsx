import React, { FC, useContext } from 'react';
import { Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';

import { IFanfic } from '../../models/Fanfic';

interface IFanficItem {
    fanfic: IFanfic,
    handlerClick: (fanfic: IFanfic) => void
}

const FanficItem: FC<IFanficItem> = ({ fanfic, handlerClick }) => {
    const { isAuthenticated, userId } = useContext(AuthContext);
    const isUserFanfic = fanfic.idUser === userId;

    return (
        <Row>
            <Col className='pb-3'>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{ fanfic.title }</Card.Title>
                        <Card.Text>
                        { fanfic.shortDescription }
                        </Card.Text>

                        <ButtonGroup size="sm">
                            <Button
                                variant="primary"
                                onClick={() => handlerClick(fanfic)}
                            >
                                Подробнее
                            </Button>
                            {isAuthenticated && isUserFanfic &&
                                <>
                                    <Button variant='warning' >
                                        <i className='bi bi-trash-fill'></i>
                                    </Button>

                                    <Button variant='info' >
                                        <i className='bi bi-gear-fill'></i>
                                    </Button>
                                </>
                            }                            
                        </ButtonGroup>
                        

                    </Card.Body>
                </Card>
            </Col>            
        </Row>
    )
}

export default FanficItem;