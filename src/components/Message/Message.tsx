import React from 'react'
import { useEffect } from 'react';
import { Col, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';

import { setShowMessage } from '../../store/messageReducer';

import './message.css';

type RootState = ReturnType<typeof store.getState>;

const Message = () => {

    const dispatch = useDispatch();
    const { message } = useSelector((state: RootState) => state.showMessage)
    
    useEffect(() => {
        return () => {
            dispatch(setShowMessage(null));
        }
    }, [dispatch]);


    return (
        <Col >
            <Toast
                onClose={() => dispatch(setShowMessage(null))}
                
                show={!!message}
                delay={5000}
                autohide
                className='message'
            >
                <Toast.Header>Message</Toast.Header>
                <Toast.Body>{ message}</Toast.Body>
            </Toast>
        </Col>
        
    )
}

export default Message;
