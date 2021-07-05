import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { getUserFanfics } from '../../../utilities/service';
import { setUserFanfics } from '../../../store/fanficReducer';
import { store } from '../../../store';
import FanficItem from '../../FanficItem';
import { IFanfic } from '../../../models/Fanfic';


type RootState = ReturnType<typeof store.getState>;

const UserFanficsPage = () => {

    const { userId } = useContext(AuthContext);
    const dispatch = useDispatch();
    const dataUserFanfics = useSelector((state: RootState) => state.fanfics.userFanfics);
    const history = useHistory();

    useEffect(() => {
        getUserFanfics(userId).then((res) => {
            const data = res.data;
            dispatch(setUserFanfics(data));
        }).catch((e) => console.log(e))
    }, [])

    return (
        <div>
            {dataUserFanfics.map((fanfic: IFanfic) => {
                    return (<FanficItem
                        handlerClick={(fanfic)=> history.push(`/fanfic/${fanfic._id}`)}
                        key={fanfic._id}
                        fanfic={fanfic} />)
                })}
        </div>
    )
}

export default UserFanficsPage;
