import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IFanfic } from '../../../models/Fanfic';
import { getFanfic } from '../../../utilities/service';

interface IFanficPageParams{
    id: string;
}


const FanficPage: FC = () => {
    const [dataFanfic, setDataFanfic] = useState<IFanfic | null>(null);

    const params = useParams<IFanficPageParams>();    

    useEffect(() => {
        getFanfic(params.id).then((res) => {
            const data = res.data;
            setDataFanfic(data);
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
