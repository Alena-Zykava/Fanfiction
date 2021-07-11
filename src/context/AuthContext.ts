import {createContext} from 'react'

interface IAuthContext {
    token: null | string,
    userId: null | string,
    userName: null | string,
    isAdmin: boolean,
    login: (
        jwtToken: string,
        id: string,
        name: string,
        roles: string[]
    ) => void,
    logout: ()=> void,
    isAuthenticated: false
}

export const AuthContext = createContext({} as IAuthContext);
