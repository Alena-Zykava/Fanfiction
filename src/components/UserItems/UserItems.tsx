import React, { FC } from 'react';

import UserItem from '../UserItem';
import { IUser } from '../../models/User';

interface IUserItems {
    users: IUser[],
    allChecked: boolean
}

const UserItems: FC<IUserItems> = ({ users, allChecked }) => {
    
    const userItems = users.map((user, index) =>
        <UserItem
            key={user._id}
            user={user}
            index={index}
            allChecked={allChecked}/>)

    return (
        <tbody>
            { userItems }
        </tbody>
    )
}

export default UserItems;