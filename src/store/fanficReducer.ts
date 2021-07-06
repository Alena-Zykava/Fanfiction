import { IFanfic } from '../models/Fanfic';


const SET_FANFICS = 'SET_FANFICS';
const SET_FANFIC_ITEM = 'SET_FANFIC_ITEM';
const SET_USER_FSNFICS = 'SET_USER_FSNFICS';

interface IDefaultState {
    items: IFanfic[],
    fanficItem: IFanfic | null,
    userFanfics: IFanfic[],
    isFetching: boolean
}

interface IAction {
    type: string,
    payload: any
}

const defaultState: IDefaultState = {
    items: [],
    fanficItem: null,
    userFanfics: [],
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
        
        case SET_USER_FSNFICS:
            return {
                ...state,
                userFanfics: action.payload
            }
    
        default:
            return state;
    }
};


export const setFanfics = (items: IFanfic[]) => ({ type: SET_FANFICS, payload: items });
export const setFanficItem = (fanficItem: IFanfic) => ({ type: SET_FANFIC_ITEM, payload: fanficItem });
export const setUserFanfics = (items: IFanfic[]) => ({ type: SET_USER_FSNFICS, payload: items });
