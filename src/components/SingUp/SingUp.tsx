import React, { FC, useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { registration } from '../../utilities/service';
import { useDispatch } from 'react-redux';
import { setShowMessage } from '../../store/messageReducer';


const SingUp: FC = () => {

    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password:''
    });    
    const history = useHistory();
    const dispatch = useDispatch();

    const { userName, password, email } = userData;

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {        
        e.preventDefault();
        
        const today = new Date().toLocaleDateString();
        registration({
            userName,
            password,
            email,
            dataRegistration: today,
            status: true
        }).then((res) => {
            dispatch(setShowMessage('Проверьте email. Перейдите по ссылке в письме и подтвердите его'));
            history.push('/login');
        }).catch((e) => {
            console.log(e);
            dispatch(setShowMessage('Ошибка регистрации! Проверьте данные'));
            // alert('Error! A user with the same name already exists');
        })
        
    }

    const handleChange = (e: { target: { name: string, value: string } }) => {
        setUserData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });        
    }
    
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Form>
                    <Form.Group >
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                name='userName'
                                placeholder="Your name"
                                value={userName}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Sing Up
                        </Button>
                        <Form.Text className="text-muted">
                            Do you have an account? 
                            <Link to="/login"> Log In</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SingUp;