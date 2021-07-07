import React, {FC, useState, ChangeEvent, MouseEvent, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

import { AuthContext } from '../../../context/AuthContext';
import { addNewFanfic, updateFanfic } from '../../../utilities/service';
import { IFanfic } from '../../../models/Fanfic';
import { store } from '../../../store';

interface INewFanficProps {
    fanfic?: IFanfic | null
}

type RootState = ReturnType<typeof store.getState>;

const NewFanficPage:FC<INewFanficProps> = () => {
    const { fanficItem } = useSelector((state: RootState) => state.fanfics);
    const [newFanficData, setNewFanficData] = useState({
        title: fanficItem?.title || '',
        shortDescription: fanficItem?.shortDescription || '',
        subtitle: fanficItem?.subtitle || '',
    });
    const { userName } = useContext(AuthContext);
    const history = useHistory();
    const { pathname } = useLocation();

    const PATH_ADD_FANFIC = '/add_fanfic';
    const isAddFanfic = pathname === PATH_ADD_FANFIC;
    
    const { title, shortDescription, subtitle } = newFanficData;
    const id = fanficItem?._id;
    console.log(id);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {        
        setNewFanficData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });
    };    

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isAddFanfic) {
            updateFanfic({ title, shortDescription, userName, subtitle, id }).then((res: any) => {
                const { idFanfic } = res.data;
                history.push(`/fanfic/${idFanfic}`);
            }).catch((e) => console.log(e));
        } else {
            addNewFanfic({ title, shortDescription, userName, subtitle }).then((res) => {
                const { idFanfic } = res.data;
                history.push(`/fanfic/${idFanfic}`);
            }).catch((e) => console.log(e));
        };
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label >Зоголовок</Form.Label>
                <Form.Control
                    name='title'
                    type='text'
                    placeholder='Зоголовок'
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Краткое описание</Form.Label>
                <Form.Control
                    as='textarea'
                    placeholder='Краткое описание'
                    rows={5}
                    name='shortDescription'
                    value={shortDescription}
                    onChange={handleChange}
                />
            </Form.Group>            
            <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Фанфик</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={10}
                    name='subtitle'
                    value={subtitle}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button
                variant='success'
                type='submit'
                onClick={handleSubmit}>
                Сохранить фанфик
            </Button>
            <Button
                className='ml-3'
                variant='outline-warning'
                onClick={() => history.push('/my_page')}>
                Отмена
            </Button>

        </Form>
    )
}

export default NewFanficPage;
