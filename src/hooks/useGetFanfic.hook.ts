import  {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFanfic } from '../utilities/service';
import { setFanficItem } from '../store/fanficReducer';

interface IFanficPageParams{
    id: string;
}

export const useGetFanfic = () => {
    const params = useParams<IFanficPageParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        const updateFanfic = async () => {
            try {
                const { data } = await getFanfic(params.id);

                dispatch(setFanficItem(data));
            } catch (error) {
                console.error(error)
            }
        }

        updateFanfic();
        
        return () => {
            dispatch(setFanficItem(null))
        };

    }, [params.id, dispatch]);
};