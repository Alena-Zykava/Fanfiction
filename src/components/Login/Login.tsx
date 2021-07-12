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
            const { accessToken, user } = res.data;            
            auth.login(accessToken, user.id, user.userName, user.roles);
            history.push('/');
        }).catch((e) => {
            console.log(e);
            dispatch(setShowMessage('Не верный логин или пароль! Проверьте подтверждение email или введенные данные. Или обратитесь в тех поддержку'));
        })
    };

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col sm={4} >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ваш логин</Form.Label>
                            <Form.Control
                                name='userName'
                                type="text"
                                placeholder="Ваш логин"
                                value={userName}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Войти
                        </Button>
                        <Form.Text className="text-muted">
                            У Вас нет аккаунта? 
                            <Link to="/singup"> Зарегистрироваться</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Login;