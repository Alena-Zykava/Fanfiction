import  {useEffect, FC} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getFanfic } from '../utilities/service';
import { setFanficItem } from '../store/fanficReducer';

import { store } from '../store';

interface IFanficPageParams{
    id: string;
}

type RootState = ReturnType<typeof store.getState>;

export const useGetFanfic = () => {
    const params = useParams<IFanficPageParams>();
    const dispatch = useDispatch();
    const dataFanfic = useSelector((state: RootState) => state.fanfics.fanficItem);    

    useEffect(() => {
        getFanfic(params.id).then((res) => {
            const data = res.data;
            dispatch(setFanficItem(data));
        }).catch((e) => console.log(e));
    }, [params.id, dispatch]);

    console.log(dataFanfic);

    return { dataFanfic }
};