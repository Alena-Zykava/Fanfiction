import React, { FC } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NewFanficPage from '../NewFanficPage';
import Loader from '../../Loader';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
import { deleteFanfic } from '../../../utilities/service';
import { RootState } from '../../../models/Interfaces';

const UpdateFanfinc: FC = () => {
    const history = useHistory();
    const { fanficItem, isFetching } = useSelector((state: RootState) => state.fanfics);   

    useGetFanfic();    

    const handlerClick = (id: any) => {
        deleteFanfic( id ).then((res) => {
        history.push('/my_page');
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            <h2>Редактированить фанфик</h2>
            {isFetching ? <Loader /> : (                
                 fanficItem && <>
                    <NewFanficPage />
                    <Row>
                        <Col className='pb-3'>
                            <Button
                                onClick={() => handlerClick(fanficItem._id)}
                                variant='warning' >
                                Удалить фанфик
                            </Button>
                        </Col>
                    </Row>
                    
                </>                
            )}            
        </div>
    )
}

export default UpdateFanfinc;
