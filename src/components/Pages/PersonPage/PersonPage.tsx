import React from 'react';

import { NavLink } from 'react-router-dom';

const PersonPage = () => {
    return (
        <div>
            <NavLink to='/my_fanfics'>Мой фанфики</NavLink>
            <NavLink to='/add_fanfic'>Добавить фанфик</NavLink>                       
        </div>
    )
}

export default PersonPage;
