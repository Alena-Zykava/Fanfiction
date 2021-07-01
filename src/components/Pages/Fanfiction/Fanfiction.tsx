import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import FanficItem from '../../FanficItem';
import Search from '../../Search';
import { IFanfic } from '../../../models/Fanfic';
import { getFanfics } from '../../../utilities/service';
import { Row } from "react-bootstrap";

const Fanfiction: FC = () => {

    const [dataFanfics, setDataFanfics] = useState<IFanfic[]>([]);
    const history = useHistory();

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
                    return (<FanficItem
                        handlerClick={(fanfic)=> history.push(`/fanfic/${fanfic._id}`)}
                        key={fanfic._id}
                        fanfic={fanfic} />)
                })}                
                 
            </>
        </>
    )
}

export default Fanfiction;