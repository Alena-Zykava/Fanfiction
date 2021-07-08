import React, {FC} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NewFanficPage from '../NewFanficPage';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
import {deleteFanfic} from '../../../utilities/service';
import { store } from '../../../store';
import Loader from '../../Loader';

type RootState = ReturnType<typeof store.getState>;

const UpdateFanfinc: FC = () => {
    const history = useHistory();
    const { fanficItem, isFetching } = useSelector((state: RootState) => state.fanfics);   

    useGetFanfic();    

    const handlerClick = (id: any) => {
        deleteFanfic( id ).then((res) => {
        history.push('/my_page');
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            <h2>Редактированить фанфик</h2>
            {isFetching ? <Loader /> : (                
                 fanficItem && <>
                    <NewFanficPage />
                    <Button
                        onClick={() => handlerClick(fanficItem._id)}
                        variant='warning' >
                        <i className='bi bi-trash-fill'></i>
                    </Button>
                </>                
            )}
            
        </div>
    )
}

export default UpdateFanfinc;
