import React, {FC, useEffect, useState} from 'react';

import Form from 'react-bootstrap/Form';

import { IUser } from '../../models/User';

interface IUserState {
    user: IUser,
    index: number,
    allChecked: boolean
}

const UserItem: FC<IUserState> = ({ user, index, allChecked }) => {
    const [oneChecked, setOneChecked] = useState(allChecked);

    useEffect(() => {
        setOneChecked(allChecked);
    }, [allChecked])
    
    useEffect(() => {
        user.checked = oneChecked;
    },[oneChecked, user])

    const handlerChange = () => {
        setOneChecked((s) => !s);
    }

    return (
        <tr>
            <td>
                <Form.Check
                    checked={oneChecked}
                    onChange={handlerChange}
                    name={user.userName} />
            </td>
            <td>{ index + 1 }</td>
            <td>{ user.userName }</td>
            <td>{ user.email }</td>
            <td>{ user.dataRegistration }</td>
            <td>{ user.roles }</td>
            <td>{ user.status ? 'unblock' : 'block' }</td>
        </tr>                
    )
}

export default UserItem;