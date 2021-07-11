import React, { FC, useEffect, useState, MouseEvent, Dispatch, SetStateAction, useContext } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

import UserItems from '../../UserItems';
import Toolbar from '../../Toolbar';
import { deleteUser, getUsers, updateUserStatus, updateUserRoles } from '../../../utilities/service';
import { IUser } from '../../../models/User';
import { AuthContext } from '../../../context/AuthContext';

const getUsersData = (setUsers: Dispatch<SetStateAction<IUser[]>>, auth: any ) => {
    const { token, logout } = auth;
    getUsers(token).then((res) => {
        const data = res.data.map((user: IUser) => {
            return {
                ...user,
                checked: false
            }
        });
        setUsers(data);
    }).catch(() => {
        logout();
    })
}

const UsersTable: FC = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [users, setUsers] = useState<IUser[]>([]);
    const auth = useContext(AuthContext);
       
    useEffect(() => {        
        getUsersData(setUsers, auth);
    }, [auth])
    
    const getChangeUsersName = () => users.filter((user) => user.checked === true)
        .map(({ userName }) => {
            return userName;
        })

    const onDeleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const usersName = getChangeUsersName();
        deleteUser({ usersName }).then((res) => {
            getUsersData(setUsers, auth);
        })
    }

    const onBlockUser = (
        e: MouseEvent<HTMLButtonElement>,
        status: boolean
     ) => {
        e.preventDefault();
        const usersName = getChangeUsersName();        
        updateUserStatus( {usersName, status} ).then((res) => {            
            getUsersData(setUsers, auth);
        })
    }

    const onUpdateRoles = (
        e: MouseEvent<HTMLButtonElement>,
        roles: string[]
     ) => {
        e.preventDefault();
        const usersName = getChangeUsersName();        
        updateUserRoles( {usersName, roles} ).then((res) => {            
            getUsersData(setUsers, auth);
        })
    }

    const handlerCheckbox = () => {
        setAllChecked((s) => !s)
    }

    return (
        <Container className='p-3'>
            <Row className='p-3 d-flex justify-content-between'>
                <Toolbar onDeleteUser={onDeleteUser} onBlockUser={onBlockUser} onUpdateRoles={ onUpdateRoles}/>
            </Row>            
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <Form.Check
                                        checked={allChecked}
                                        onChange={handlerCheckbox} />
                                </th>
                                <th>#</th>
                                <th>Имя пользователя</th>
                                <th>Email</th>
                                <th>Дата регистрации</th>
                                <th>Роли</th>
                                <th>Status</th>
                            </tr>
                        </thead>                        
                        <UserItems
                            users={users}
                            allChecked={allChecked}
                            />
                    </Table>
                </Col>
            </Row>            
        </Container>        
    )
}

export default UsersTable;