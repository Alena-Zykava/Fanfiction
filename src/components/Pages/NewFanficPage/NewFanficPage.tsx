import React, {useState, ChangeEvent, MouseEvent, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

import { addNewFanfic } from '../../../utilities/service';

const NewFanficPage = () => {

    const [newFanficData, setNewFanficData] = useState({
        title: '',
        shortDescription: '',
        subtitle: ''
    });
    const { userId } = useContext(AuthContext);
    const history = useHistory();

    const {title, shortDescription, subtitle } = newFanficData;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        setNewFanficData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });
    };

    const lastDataUpdate = new Date().toLocaleDateString();

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addNewFanfic({ title, shortDescription, idUser: userId, subtitle, lastDataUpdate }).then((res) => {
            const { idFanfic } = res.data;
            history.push(`/fanfic/${idFanfic}`);
        }).catch((e) => console.log(e));
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
