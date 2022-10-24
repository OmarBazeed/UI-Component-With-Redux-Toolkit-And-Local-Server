import React from 'react';
import './sidebar.css'
import { useSelector } from 'react-redux';
export default function Sidebar() {

const {name} = useSelector(state=>state.user.userData);


return (
    <div className='side'>
        <ul>
            <li> Home </li>
            <li> Portofolio </li>
            <li> About </li>
            <li> Contact </li>
            <li> Profile </li>
            <li> Hello {name} </li>
        </ul>
    </div>
)
}
