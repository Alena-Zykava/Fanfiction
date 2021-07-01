import React, { FC } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

import { IFanfic } from '../../models/Fanfic';

interface IFanficItem {
    fanfic: IFanfic,
    handlerClick: (fanfic: IFanfic) => void
}

const FanficItem: FC<IFanficItem> = ({ fanfic, handlerClick }) => {
    return (
        <Row>
            <Col>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{ fanfic.title }</Card.Title>
                        <Card.Text>
                        { fanfic.shortDescription }
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => handlerClick(fanfic)}
                        >
                            Подробнее
                        </Button>
                    </Card.Body>
                </Card>
            </Col>            
        </Row>
    )
}

export default FanficItem;