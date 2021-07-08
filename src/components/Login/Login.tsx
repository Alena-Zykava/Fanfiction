import React, { FC, useContext, useState, MouseEvent, ChangeEvent } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { setShowMessage } from '../../store/messageReducer';
import { loginUser } from '../../utilities/service';
  
const Login: FC = () => {

    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    });

    const { userName, password } = userData;
    const auth = useContext(AuthContext);
    const history = useHistory(); 
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        loginUser({ userName, password }).then((res) => {
            console.log(res.data);
            const { accessToken, user} = res.data;
            
            auth.login(accessToken, user.id, user.userName);
            history.push('/');
        }).catch(() => {
            dispatch(setShowMessage('ошибка логина'));
            //alert('Error login. User or password is not correct')
        })
    };

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                name='userName'
                                type="text"
                                placeholder="Your name"
                                value={userName}
                                onChange={handleChange} />
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
                            Log in
                        </Button>
                        <Form.Text className="text-muted">
                            Don't you have an account? 
                            <Link to="/singup"> Sing Up</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Login;