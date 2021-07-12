import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { RootState } from "../models/Interfaces";
import { IUser } from "../models/User";
import { setIsFetchingUsers, setUsers } from "../store/userReducer";
import { getUsers } from "../utilities/service";

export const useGetUsers = () => {
    const { token, logout } = useContext(AuthContext);
    const dispatch = useDispatch();
    const dataUsers = useSelector((state: RootState) => state.users.items)
    
    const setDataUsers = useCallback(() => {
        dispatch(setIsFetchingUsers(true));
        getUsers(token).then((res) => {
            const data = res.data.map((user: IUser) => {
                return {
                    ...user,
                    checked: false
                }
            });
            dispatch(setIsFetchingUsers(false));
            dispatch(setUsers(data));
            
        }).catch(() => {
            dispatch(setIsFetchingUsers(false));
            logout();
        })
    }, [dispatch, token, logout])

    useEffect(() => {
        setDataUsers();
    }, [setDataUsers])

    

    return { dataUsers, setDataUsers };
}