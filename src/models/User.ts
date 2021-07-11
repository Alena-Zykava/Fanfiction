
export interface IUser {
    _id: number,
    userName: string,
    password: string,
    email: string,
    dataRegistration: string,    
    status: boolean,
    roles: string[],
    checked: boolean
}