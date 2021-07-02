import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getFanfic } from '../../../utilities/service';
import { setFanficItem } from '../../../store/fanficReducer';
import { store } from '../../../store';


interface IFanficPageParams{
    id: string;
}

type RootState = ReturnType<typeof store.getState>;


const FanficPage: FC = () => {

    const params = useParams<IFanficPageParams>();
    const dispatch = useDispatch();
    const dataFanfic = useSelector((state: RootState) => state.fanfics.fanficItem)

    useEffect(() => {
        getFanfic(params.id).then((res) => {
            const data = res.data;
            dispatch(setFanficItem(data));
        }).catch((e) => console.log(e));
    }, [params.id]);

    return (
            <div>
                <h2>{ dataFanfic?.title}</h2>
                <div>{ dataFanfic?.shortDescription}</div>
                <div>{ dataFanfic?.subtitle }</div>
                <div>author: {dataFanfic?.idUser}</div>
                <div>update data: { dataFanfic?.lastDataUpdate}</div>
            </div> 
    )
}

export default FanficPage;
