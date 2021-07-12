import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from "react-bootstrap";

import FanficItem from '../../FanficItem';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { setFanfics, setSearchInfo, setIsFetching } from '../../../store/fanficReducer';
import Loader from "../../Loader";
import { setShowMessage } from "../../../store/messageReducer";
import { RootState } from "../../../models/Interfaces";



const Fanfiction: FC = () => {

    const dispatch = useDispatch();
    const { items: dataFanfics, searchInfo, isFetching } = useSelector((state: RootState) => state.fanfics);

    useEffect(() => {
        dispatch(setIsFetching(true));
        console.log("data");
        getFanfics().then((res) => {
            const data = res.data;
            dispatch(setFanfics(data));
            console.log(data);
            dispatch(setIsFetching(false));
        }).catch((e) => {
            console.log(e);
            dispatch(setIsFetching(false));
            dispatch(setShowMessage('Ошибка загрузки. Повторите позже.'));
        });
    }, [dispatch])

    const searchFanfic = dataFanfics.sort((a: IFanfic, b: IFanfic) => {       
        return a.lastDataUpdate > b.lastDataUpdate ? -1 : 1;
    }).filter((fanfic: IFanfic) => fanfic.title.toUpperCase().indexOf(searchInfo.toUpperCase()) !== -1);

    return (
        <>
            <Row>
                <Col className='mb-3'>
                    <Search />
                </Col>                
            </Row>
            {isFetching ? 
                <Loader />
            : (
                <>
                {searchFanfic.map((fanfic: IFanfic) => {
                    return (<FanficItem                        
                        key={fanfic._id}
                        fanfic={fanfic} />)
                })}                
                {searchInfo &&
                    <Button 
                        variant='outline-primary'
                        onClick={() => dispatch(setSearchInfo(''))}>
                        Сбросить поиск
                    </Button>}
                </>   
            )
                }
            
        </>
    )
}

export default Fanfiction;