import React, {FC, useState, ChangeEvent, MouseEvent, useContext} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import UploadPicture from '../../UploadPicture';
import { AuthContext } from '../../../context/AuthContext';
import { addNewFanfic, updateFanfic } from '../../../utilities/service';
import { IFanfic } from '../../../models/Fanfic';
import { setShowMessage } from '../../../store/messageReducer';
import { PATH_ADD_FANFIC } from '../../../constants/constants';
import { RootState } from '../../../models/Interfaces';

interface INewFanficProps {
    fanfic?: IFanfic | null
}

const NewFanficPage:FC<INewFanficProps> = () => {
    const { fanficItem } = useSelector((state: RootState) => state.fanfics);
    const [newFanficData, setNewFanficData] = useState({
        title: fanficItem?.title || '',
        shortDescription: fanficItem?.shortDescription || '',
        subtitle: fanficItem?.subtitle || '',
    });
    const [imageUrl, setImageUrl] = useState(fanficItem?.image || '');

    const { userName } = useContext(AuthContext);
    const history = useHistory();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    
    const isAddFanfic = pathname === PATH_ADD_FANFIC;
    
    const { title, shortDescription, subtitle } = newFanficData;
    const id = fanficItem?._id;

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
            updateFanfic({ title, shortDescription, userName, subtitle, id, image: imageUrl }).then((res: any) => {
                const { idFanfic } = res.data;
                history.push(`/fanfic/${idFanfic}`);
            }).catch((e) => console.log(e));
        } else {
            addNewFanfic({ title, shortDescription, userName, subtitle, image: imageUrl }).then((res) => {
                const { idFanfic } = res.data;
                history.push(`/fanfic/${idFanfic}`);
            }).catch((e) => {
                console.log(e);
                dispatch(setShowMessage('?????????????????? ????????????!'))
            });
        };
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label >??????????????????</Form.Label>
                <Form.Control
                    name='title'
                    type='text'
                    placeholder='??????????????????'
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>?????????????? ????????????????</Form.Label>
                <Form.Control
                    as='textarea'
                    placeholder='?????????????? ????????????????'
                    rows={5}
                    name='shortDescription'
                    value={shortDescription}
                    onChange={handleChange}
                />
            </Form.Group>            
            <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>????????????</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={10}
                    name='subtitle'
                    value={subtitle}
                    onChange={handleChange}
                />
            </Form.Group>
            <Row>
                <Col className='pb-3'>
                    <UploadPicture imageUrl={imageUrl} setImageUrl={ setImageUrl }/>
                </Col>
            </Row>
            <Row>
                <Col className='pb-3'>
                    <Button
                        variant='success'
                        type='submit'
                        onClick={handleSubmit}>
                        ?????????????????? ????????????
                    </Button>
                    <Button
                        className='ml-3'
                        variant='outline-warning'
                        onClick={() => history.push('/my_page')}>
                        ????????????
                    </Button>
                </Col>
            </Row>  
        </Form>
    )
}

export default NewFanficPage;
