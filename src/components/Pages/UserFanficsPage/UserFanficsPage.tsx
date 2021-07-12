import React from 'react';
import { deleteFanfic } from '../../../utilities/service';
import FanficItem from '../../FanficItem';
import { IFanfic } from '../../../models/Fanfic';
import { useGetUserFanfics } from '../../../hooks/useGetUserFanfics';
import { RootState } from '../../../models/Interfaces';
import { useSelector } from 'react-redux';
import Loader from '../../Loader';

const UserFanficsPage = () => {

    const { dataUserFanfics, setDataUserFanfics } = useGetUserFanfics();
    const {isFetching} = useSelector((state: RootState)=> state.fanfics)

    const handlerClick = (id: any) => {
        deleteFanfic(id).then((res) => {
            setDataUserFanfics();
        }).catch((e) => console.log(e));
    }

    return (
        <>
        {isFetching ?
            <Loader />
            : (
            <>
            {dataUserFanfics.sort((a: IFanfic, b: IFanfic) => {       
                    return a.lastDataUpdate > b.lastDataUpdate ? -1 : 1;
                }).map((fanfic: IFanfic) => {
                    return (<FanficItem
                        handlerClick={handlerClick}
                        key={fanfic._id}
                        fanfic={fanfic} />)
            })}
        </>
        )}
        </>    
    )
}

export default UserFanficsPage;
