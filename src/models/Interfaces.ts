import { store } from "../store";

export interface IAction {
    type: string,
    payload: any
}

export type RootState = ReturnType<typeof store.getState>;