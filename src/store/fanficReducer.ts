import { IFanfic } from '../models/Fanfic';


const SET_FANFICS = 'SET_FANFICS';
const SET_FANFIC_ITEM = 'SET_FANFIC_ITEM';

interface IDefaultState {
    items: IFanfic[],
    fanficItem: IFanfic | null,
    isFetching: boolean
}

interface IAction {
    type: string,
    payload: any
}

const defaultState: IDefaultState = {
    items: [],
    fanficItem: null,
    isFetching: true
}

export default function fanficReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case SET_FANFICS:
            return {
                ...state,
                items: action.payload //??
            }
        
        case SET_FANFIC_ITEM:
            return {
                ...state,
                fanficItem: action.payload
            }
    
        default:
            return state;
    }
};


export const setFanfics = (items: IFanfic[]) => ({ type: SET_FANFICS, payload: items });
export const setFanficItem = (fanficItem: IFanfic) => ({ type: SET_FANFIC_ITEM, payload: fanficItem });
