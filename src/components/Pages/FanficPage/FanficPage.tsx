import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
//import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
import { store } from '../../../store';

type RootState = ReturnType<typeof store.getState>;

const FanficPage: FC = () => {

    //const { dataFanfic } = useGetFanfic();
    const { fanficItem } = useSelector((state: RootState) => state.fanfics);
    useGetFanfic();

    return (
            <div>
                <h2>{ fanficItem?.title}</h2>
                <div>{ fanficItem?.shortDescription}</div>
                <div>{ fanficItem?.subtitle }</div>
                <div>Автор: {fanficItem?.userName}</div>
                <div>Последняя дата обновления: { fanficItem?.lastDataUpdate}</div>
            </div> 
    )
}

export default FanficPage;
