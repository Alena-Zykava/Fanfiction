import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row } from "react-bootstrap";

import FanficItem from '../../FanficItem';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { setFanfics } from '../../../store/fanficReducer';
import { store } from "../../../store";

type RootState = ReturnType<typeof store.getState>;

const Fanfiction: FC = () => {

    const dispatch = useDispatch();
    const dataFanfics = useSelector((state: RootState) => state.fanfics.items);

    useEffect(() => {
        getFanfics().then((res) => {
            const data = res.data;
            dispatch(setFanfics(data));
        }).catch((e) => console.log(e));
    }, [])

    

    return (
        <>
            <Row>
                <Search /> 
            </Row>
            <>
                {dataFanfics.map((fanfic: IFanfic) => {
                    return (<FanficItem                        
                        key={fanfic._id}
                        fanfic={fanfic} />)
                })}                
                 
            </>
        </>
    )
}

export default Fanfiction;