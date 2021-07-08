import React from 'react';
import { deleteFanfic } from '../../../utilities/service';
import FanficItem from '../../FanficItem';
import { IFanfic } from '../../../models/Fanfic';
import { useGetUserFanfics } from '../../../hooks/useGetUserFanfics';

const UserFanficsPage = () => {

    const { dataUserFanfics, setDataUserFanfics } = useGetUserFanfics();

    const handlerClick = (id: any) => {
        deleteFanfic(id).then((res) => {
            setDataUserFanfics();
        }).catch((e) => console.log(e));
    }

    return (
        <>
            {dataUserFanfics.map((fanfic: IFanfic) => {
                return (<FanficItem
                        handlerClick={handlerClick}
                        key={fanfic._id}
                        fanfic={fanfic} />)
                })}
        </>
    )
}

export default UserFanficsPage;
