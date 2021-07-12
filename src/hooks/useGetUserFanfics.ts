import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "../context/AuthContext";
import { setUserFanfics } from "../store/fanficReducer";
import { setShowMessage } from "../store/messageReducer";
import { getUserFanfics } from "../utilities/service";
import { RootState } from '../models/Interfaces';


export const useGetUserFanfics = () => {
    const { userName } = useContext(AuthContext);
    const dispatch = useDispatch();
    const dataUserFanfics = useSelector((state: RootState) => state.fanfics.userFanfics);
    
    const setDataUserFanfics = useCallback(() => {        
        getUserFanfics(userName).then((res) => {
            const data = res.data;
            dispatch(setUserFanfics(data));
        }).catch((e) => {
            console.log(e);
            dispatch(setShowMessage('Проблема с загрузкой данных. Повторите позже'));
        })
    }, [dispatch, userName])
    
    useEffect(() => {
        setDataUserFanfics();
    }, [setDataUserFanfics])

    return { dataUserFanfics, setDataUserFanfics }
}