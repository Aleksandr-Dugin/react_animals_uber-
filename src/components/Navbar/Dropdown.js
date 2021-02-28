import React, {useState} from 'react';
import './Dropdown.css'; 
import * as IconBs from 'react-icons/bs';
import * as IconFi from 'react-icons/fi';
import {Link} from 'react-router-dom';
import DropdownItems from './DropdownItems'

const Dropdown = ({DropItems})=>{
    const [openBar, setOpenBar] = useState(false)

    const showDropdown = ()=>{
        return(
            setOpenBar(!openBar)
        )
    }       
    return(

        <div className='dropdown-conteiner'>
            <div className='dropdown-bars'>
                <Link to='#' className='dropdown-closing'>
                    <IconFi.FiMenu onClick={showDropdown}/>
                </Link>
            </div>
            <nav className={openBar? 'dropdown active': 'dropdown'}>
                <Link to='/home' className='dropdown-closing' onClick={showDropdown}><IconBs.BsHouseDoorFill/></Link>
                <ul className='dropdown-links'>
                    {DropItems.map((item, index) =>{
                        return (
                            <li className={item.className} key={index} onClick={showDropdown}><Link className={item.linkCls} to={item.path}>{item.title}</Link></li>
                        )
                    })
                }
                </ul>
            </nav>
        </div>
    )

}

export default Dropdown;