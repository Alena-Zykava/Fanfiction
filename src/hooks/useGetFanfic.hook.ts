import  {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFanfic } from '../utilities/service';
import { setFanficItem, setIsFetching } from '../store/fanficReducer';
import { setShowMessage } from '../store/messageReducer';

interface IFanficPageParams{
    id: string;
}

export const useGetFanfic = () => {
    const params = useParams<IFanficPageParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        const updateFanfic = async () => {
            try {
                dispatch(setIsFetching(true));
                const { data } = await getFanfic(params.id);
                dispatch(setFanficItem(data));
                dispatch(setIsFetching(false));
            } catch (e) {
                console.log(e);
                dispatch(setShowMessage('Проблема с загрузкой данных. Повторите позже'));
            }
        }

        updateFanfic();
        
        return () => {
            dispatch(setFanficItem(null))
        };

    }, [params.id, dispatch]);
};