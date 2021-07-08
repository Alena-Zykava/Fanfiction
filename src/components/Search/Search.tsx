import React, { FC, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearchInfo } from '../../store/fanficReducer';

const Search: FC = () => {
    const [inputSearch, setInputSearch] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        event.preventDefault();
        dispatch(setSearchInfo(inputSearch));
        setInputSearch('');
    }

    const handleChange = (e: { target: { value: string } }) => {
        setInputSearch(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Control
                type='search'
                placeholder='Поиск по названию фанфика' 
                value={inputSearch}
                onChange={ handleChange } />
        </Form>
    )
}

export default Search;