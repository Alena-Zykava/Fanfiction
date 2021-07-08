import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from "react-bootstrap";

import FanficItem from '../../FanficItem';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { setFanfics, setSearchInfo } from '../../../store/fanficReducer';
import { store } from "../../../store";

type RootState = ReturnType<typeof store.getState>;

const Fanfiction: FC = () => {

    const dispatch = useDispatch();
    const dataFanfics = useSelector((state: RootState) => state.fanfics.items);
    const { searchInfo } = useSelector((state: RootState) => state.fanfics);


    useEffect(() => {
        getFanfics().then((res) => {
            const data = res.data;
            dispatch(setFanfics(data));
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