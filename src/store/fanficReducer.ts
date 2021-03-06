import { IFanfic } from '../models/Fanfic';
import { IAction } from '../models/Interfaces';


const SET_FANFICS = 'SET_FANFICS';
const SET_FANFIC_ITEM = 'SET_FANFIC_ITEM';
const SET_USER_FANFICS = 'SET_USER_FANFICS';
const SET_SEARCH_INFO = 'SET_SEARCH_INFO';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

interface IDefaultState {
    items: IFanfic[],
    fanficItem: IFanfic | null,
    userFanfics: IFanfic[],
    searchInfo: string,
    isFetching: boolean
}


const defaultState: IDefaultState = {
    items: [],
    fanficItem: null,
    userFanfics: [],
    searchInfo: '',
    isFetching: true
}

export default function fanficReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case SET_FANFICS:
            return {
                ...state,
                items: action.payload 
            }
        
        case SET_FANFIC_ITEM:
            return {
                ...state,
                fanficItem: action.payload
            }
        
        case SET_USER_FANFICS:
            return {
                ...state,
                userFanfics: action.payload
            }
        
        case SET_SEARCH_INFO:
            return {
                ...state,
                searchInfo: action.payload
            }
        
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
    
        default:
            return state;
    }
};


export const setFanfics = (items: IFanfic[]) => ({ type: SET_FANFICS, payload: items });
export const setFanficItem = (fanficItem: IFanfic | null) => ({ type: SET_FANFIC_ITEM, payload: fanficItem });
export const setUserFanfics = (items: IFanfic[]) => ({ type: SET_USER_FANFICS, payload: items });
export const setSearchInfo = (searchFanfics: string) => ({ type: SET_SEARCH_INFO, payload: searchFanfics });
export const setIsFetching = (isFetching: boolean) => ({ type: SET_IS_FETCHING, payload: isFetching });

