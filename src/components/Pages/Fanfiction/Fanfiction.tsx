import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from "react-bootstrap";

import FanficItem from '../../FanficItem';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { setFanfics, setSearchInfo, setIsFetching } from '../../../store/fanficReducer';
import { store } from "../../../store";
import Loader from "../../Loader";

type RootState = ReturnType<typeof store.getState>;

const Fanfiction: FC = () => {

    const dispatch = useDispatch();
    const { items: dataFanfics, searchInfo, isFetching } = useSelector((state: RootState) => state.fanfics);

    useEffect(() => {
        dispatch(setIsFetching(true));
        getFanfics().then((res) => {
            const data = res.data;
            dispatch(setFanfics(data));
            dispatch(setIsFetching(false));
        }).catch((e) => console.log(e));
    }, [dispatch])

    const searchFanfic = dataFanfics.filter((fanfic: IFanfic) => fanfic.title.toUpperCase().indexOf(searchInfo.toUpperCase()) !== -1);

    return (
        <>
            <Row>
                <Col className='mb-3'>
                    <Search />
                </Col>                
            </Row>
            {isFetching &&
                <Loader />}
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
        </>
    )
}

export default Fanfiction;