import React, { FC, useState } from 'react';
import { Form } from 'react-bootstrap';

const Search: FC = () => {
    const [inputSearch, setInputSearch] = useState('');

    const onSubmit = (event: any) => {
        event.preventDefault();
        console.log(inputSearch);
        setInputSearch('');
    }

    const handleChange = (e: { target: { value: string } }) => {
        setInputSearch(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Control
                type='search'
                placeholder='Поиск по сайту' 
                value={inputSearch}
                onChange={ handleChange } />
        </Form>
    )
}

export default Search;