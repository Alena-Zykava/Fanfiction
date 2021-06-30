import React, { FC, useEffect, useState } from "react";

import FanficItem from '../../Fanfic';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { Row } from "react-bootstrap";

const Fanfiction: FC = () => {

    const [dataFanfics, setDataFanfics] = useState<IFanfic[]>([]);

    useEffect(() => {
        console.log('start loader');
        getFanfics().then((res) => {
            const data = res.data;
            console.log(data);
            setDataFanfics(data);
        }).catch((e) => console.log(e));
    }, [])

    return (
        <>
            <Row>
                <Search /> 
            </Row>
            <>
                {dataFanfics.map((fanfic) => {
                    return <FanficItem key={fanfic._id} fanfic={ fanfic }/>
                })}                
                 
            </>
        </>
    )
}

export default Fanfiction;