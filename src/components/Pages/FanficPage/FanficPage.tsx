import React, { FC } from 'react';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';

const FanficPage: FC = () => {

    const { dataFanfic } = useGetFanfic();

    return (
            <div>
                <h2>{ dataFanfic?.title}</h2>
                <div>{ dataFanfic?.shortDescription}</div>
                <div>{ dataFanfic?.subtitle }</div>
                <div>Автор: {dataFanfic?.userName}</div>
                <div>Последняя дата обновления: { dataFanfic?.lastDataUpdate}</div>
            </div> 
    )
}

export default FanficPage;
