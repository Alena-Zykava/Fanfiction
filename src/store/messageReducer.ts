const SET_SHOW_MESSAGE = 'SET_SHOW_MESSAGE';

interface IAction {
    type: string,
    payload: any
}

interface IDefaultState {
    message: string | null
}

const defaultState: IDefaultState = {
    message: null 
}

export default function messageReducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case SET_SHOW_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        
        default:
            return state;
    }
}

export const setShowMessage = (message: string | null) => ({ type: SET_SHOW_MESSAGE, payload: message });