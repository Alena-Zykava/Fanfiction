import { IUser } from '../models/User';
import { IAction } from '../models/Interfaces';

const SET_USERS = 'SET_USERS';
const SET_IS_FETCHING_USERS = 'SET_IS_FETCHING_USERS';

interface IDefaultState {
    items: IUser[],    
    isFetching: boolean
}

const defaultState: IDefaultState = {
    items: [],
    isFetching: true
}

export default function userReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                items: action.payload
            };            
           
        case SET_IS_FETCHING_USERS:
            return {
                ...state,
                isFetching: action.payload
            };
        
        default:
            return state;
    }
}

export const setUsers = (items: IUser[]) => ({ type: SET_USERS, payload: items });
export const setIsFetchingUsers = (isFetching: boolean) => ({ type: SET_IS_FETCHING_USERS, payload: isFetching });