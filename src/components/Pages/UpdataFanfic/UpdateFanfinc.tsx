import React, {FC} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import NewFanficPage from '../NewFanficPage';
import { useGetFanfic } from '../../../hooks/useGetFanfic.hook';
import { deleteFanfic } from '../../../utilities/service';


const UpdateFanfinc: FC = () => {
    const history = useHistory();

    const { dataFanfic } = useGetFanfic();
    console.log(dataFanfic);
    
    const handlerClick = (id: any) => {
        deleteFanfic( id ).then((res) => {
        history.push('/my_page');
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            <h2>Редактированить фанфик</h2>
            {dataFanfic &&
                <NewFanficPage fanfic={dataFanfic} />}
            <Button
                onClick={() => handlerClick(dataFanfic._id)}
                variant='warning' >
                <i className='bi bi-trash-fill'></i>
            </Button>
        </div>
    )
}

export default UpdateFanfinc;
