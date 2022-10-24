import React from 'react';
import './header.css';

import { useSelector } from 'react-redux';

export default function Header() {

const {name} = useSelector(state=> state.user.userData)

return (
    <div className='header'>
    <h2>Unique Coderz</h2>
    <p> Hello {name} </p>
    </div>
)
}
