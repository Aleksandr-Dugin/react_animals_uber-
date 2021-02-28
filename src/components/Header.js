import React from 'react';
import Navbar from './Navbar/Navbar'
import './Header.css'
import {Link} from 'react-router-dom';
import NavItems from './Navbar/NavItems';
import DropdownItems from './Navbar/DropdownItems';
import Dropdown from './Navbar/Dropdown.js'; 
const Header = ()=>{
    return(
        <header className='main-header'>
            <Navbar NavItems={NavItems}/>
            <Link to='#' className='btn-link'>
                <button className='btn-sign' >
                    Sign in
                </button>
            </Link>
            <Dropdown DropItems={DropdownItems}/>
        </header>
    )
}


export default Header;
