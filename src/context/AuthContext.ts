import {createContext} from 'react'

interface IAuthContext {
    token: null | string,
    userId: null | string,
    userName: null | string,
    login: (
        jwtToken: string,
        id: string,
        name: string
    ) => void,
    logout: ()=> void,
    isAuthenticated: false
}

export const AuthContext = createContext({} as IAuthContext);
