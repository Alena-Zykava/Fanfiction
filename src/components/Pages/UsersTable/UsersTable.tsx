import React, { FC, useState, MouseEvent } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

import UserItems from '../../UserItems';
import Toolbar from '../../Toolbar';
import { deleteUser, updateUserStatus, updateUserRoles } from '../../../utilities/service';
import { IUser } from '../../../models/User';
import { useGetUsers } from '../../../hooks/useGetUsers';

const UsersTable: FC = () => {
    const [allChecked, setAllChecked] = useState(false);   
    
    const {dataUsers, setDataUsers} = useGetUsers();  
    
    const getChangeUsersName = () => dataUsers.filter((user: IUser) => user.checked === true)
        .map((user: IUser) => {
            return user.userName;
    })

    const onDeleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const usersName = getChangeUsersName();
        deleteUser({ usersName }).then((res) => {
            setDataUsers();
        })
    }

    const onBlockUser = (
        e: MouseEvent<HTMLButtonElement>,
        status: boolean
     ) => {
        e.preventDefault();
        const usersName = getChangeUsersName();        
        updateUserStatus( {usersName, status} ).then((res) => {            
            setDataUsers();
        })
    }

    const onUpdateRoles = (
        e: MouseEvent<HTMLButtonElement>,
        roles: string[]
     ) => {
        e.preventDefault();
        const usersName = getChangeUsersName();        
        updateUserRoles( {usersName, roles} ).then((res) => {            
            setDataUsers();
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
                            users={dataUsers}
                            allChecked={allChecked}
                            />
                    </Table>
                </Col>
            </Row>            
        </Container>        
    )
}

export default UsersTable;