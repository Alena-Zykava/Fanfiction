import React, { FC } from 'react';
import { Button, Card, Row } from 'react-bootstrap';

import { IFanfic } from '../../models/Fanfic';

interface IFanficItem {
    fanfic: IFanfic
}

const FanficItem: FC<IFanficItem> = ({ fanfic }) => {
    return (
        <Row>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{ fanfic.title }</Card.Title>
                    <Card.Text>
                    { fanfic.shortDescription }
                    </Card.Text>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </Row>
        
        // <div>

        //     <h2>{ fanfic.title}</h2>
        //     <div>{ fanfic.shortDescription}</div>
        //     <div>{ fanfic.subtitle }</div>
        //     <div>author: {fanfic.idUser}</div>
        //     <div>update data: { fanfic.lastDataUpdate}</div>
        // </div>        
    )
}

export default FanficItem;