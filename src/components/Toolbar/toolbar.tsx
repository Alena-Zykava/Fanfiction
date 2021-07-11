import React, { FC, MouseEvent } from 'react';
import { Button, Col } from 'react-bootstrap';

interface IToolbar{
    onDeleteUser: (e: any) => void,
    onBlockUser: (e: MouseEvent<HTMLButtonElement>, status: boolean) => void;
    onUpdateRoles: (e: MouseEvent<HTMLButtonElement>, roles: string[]) => void;
}

const Toolbar: FC<IToolbar> = ({ onDeleteUser, onBlockUser, onUpdateRoles }) => {
    

    return (
        <Col className='d-flex justify-content-between'>
            <Button variant='success' onClick={(e: MouseEvent<HTMLButtonElement>) => onBlockUser(e, true)}>
                <i className='bi bi-unlock-fill'></i>
            </Button>
            <Button variant='warning' onClick={(e: MouseEvent<HTMLButtonElement>) => onBlockUser(e, false)}>
                <i className='bi bi-lock-fill'></i>
            </Button>
            <Button variant='danger' onClick={onDeleteUser}>
                <i className='bi bi-trash-fill'></i>
            </Button>
            <Button onClick={(e: MouseEvent<HTMLButtonElement>) => onUpdateRoles(e, ["ADMIN"])}>Назчанить админом</Button>
            <Button onClick={(e: MouseEvent<HTMLButtonElement>) => onUpdateRoles(e, ["USER"])}>Удалить админа</Button>
        </Col> 
    )
}

export default Toolbar;