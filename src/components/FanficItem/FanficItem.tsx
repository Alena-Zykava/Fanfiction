import React, { FC, useContext } from 'react';
import { Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { IFanfic } from '../../models/Fanfic';

interface IFanficItem {
    fanfic: IFanfic,
    handlerClick?: (id: number) => void
}

const FanficItem: FC<IFanficItem> = ({ fanfic, handlerClick = ()=> {} }) => {
    const { isAuthenticated, userName } = useContext(AuthContext);
    const isUserFanfic = fanfic.userName === userName && isAuthenticated;
    const { pathname } = useLocation();
    const history = useHistory();
    
    const PATH_MY_PAGE = '/my_page';
    const isMyPage = pathname === PATH_MY_PAGE;
    
    return (
        <Row>
            <Col className='pb-3'>
                <Card className="text-center">
                    {isUserFanfic && !isMyPage &&
                        <span className="badge bg-secondary">Ваш фанфик</span>
                    }
                    <Card.Body>
                        <Card.Title>{ fanfic.title }</Card.Title>
                        <Card.Text>
                        { fanfic.shortDescription }
                        </Card.Text>

                        <ButtonGroup size="sm">
                            <Button
                                variant="primary"
                                onClick={() => history.push(`/fanfic/${fanfic._id}`)}
                            >
                                Подробнее
                            </Button>
                            {isUserFanfic && isMyPage &&
                                <>    
                                <Button
                                    variant='secondary'
                                    onClick={()=> history.push(`/update_fanfic/${fanfic._id}`)}>
                                        <i className='bi bi-gear-fill'></i>
                                </Button>
                                <Button variant='warning' onClick={() => handlerClick(fanfic._id)}>
                                    <i className='bi bi-trash-fill'></i>
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