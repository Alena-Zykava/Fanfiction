import React, { FC, MouseEvent } from 'react';
import { Button, Col } from 'react-bootstrap';

interface IToolbar{
    onDeleteUser: (e: any) => void,
    onBlockUser: (e: MouseEvent<HTMLButtonElement>, status: boolean) => void
}

const Toolbar: FC<IToolbar> = ({ onDeleteUser, onBlockUser }) => {
    

    return (
        <Col sm={3} className='d-flex justify-content-between'>
            <Button variant='success' onClick={(e: MouseEvent<HTMLButtonElement>) => onBlockUser(e, true)}>
                <i className='bi bi-unlock-fill'></i>
            </Button>
            <Button variant='warning' onClick={(e: MouseEvent<HTMLButtonElement>) => onBlockUser(e, false)}>
                <i className='bi bi-lock-fill'></i>
            </Button>
            <Button variant='danger' onClick={onDeleteUser}>
                <i className='bi bi-trash-fill'></i>
            </Button>
        </Col> 
    )
}

export default Toolbar;