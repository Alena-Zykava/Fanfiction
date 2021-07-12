import React, { FC } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
import { RootState } from '../../../models/Interfaces';
import Loader from '../../Loader';

import './fanficPage.css';

const FanficPage: FC = () => {

    const { fanficItem, isFetching } = useSelector((state: RootState) => state.fanfics);
    useGetFanfic();

    return (        
        <>
            {isFetching ? <Loader /> : (
                <>
                    <Row>
                        <Col className='text-center'>
                            <h2>{ fanficItem?.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Краткое описание:</h4>
                            <div>{ fanficItem?.shortDescription}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={fanficItem?.image} fluid rounded />                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Полное содержание:</h4>
                            <div className='subtitle text-justify'>{ fanficItem?.subtitle }</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Автор: {fanficItem?.userName}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Последняя дата обновления: { new Date(fanficItem?.lastDataUpdate).toLocaleString()}</h4>
                        </Col>
                    </Row>
                </>
            )}            
        </> 
    )
}

export default FanficPage;
