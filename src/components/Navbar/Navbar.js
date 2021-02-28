import React from 'react';
import './Navbar.css';
import Dropdown from './Dropdown.js';
import {Link} from 'react-router-dom';

const Navbar = ({NavItems})=> {
    return(
        <div className='navbar-conteiner'>
            <nav className='navigation'>
                <h1 className='main-text'>animals uber</h1>
                <ul className='all-links'>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index} className={item.className}><Link to={item.path} className={item.linkCls}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </nav> 
        </div>
    ) 
}


export default Navbar;






