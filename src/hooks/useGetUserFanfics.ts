import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "../context/AuthContext";
import { setIsFetching, setUserFanfics } from "../store/fanficReducer";
import { setShowMessage } from "../store/messageReducer";
import { getUserFanfics } from "../utilities/service";
import { RootState } from '../models/Interfaces';


export const useGetUserFanfics = () => {
    const { userName } = useContext(AuthContext);
    const dispatch = useDispatch();
    const dataUserFanfics = useSelector((state: RootState) => state.fanfics.userFanfics);

    const setDataUserFanfics = () => {
            dispatch(setIsFetching(true));
            getUserFanfics(userName).then((res) => {
                const data = res.data;
                dispatch(setUserFanfics(data));
                dispatch(setIsFetching(false));
            }).catch((e) => {
                console.log(e);
                dispatch(setIsFetching(false));
                dispatch(setShowMessage('Проблема с загрузкой данных. Повторите позже'));
            })
    }
    
    useEffect(() => {          
        setDataUserFanfics();        
    },[])
    
    
    return { dataUserFanfics, setDataUserFanfics }
}