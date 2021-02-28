import React from 'react';
import './Main.css'; 
import mainImage from './A8-FwLaIF4k.png'

const Main = ()=>{
    return (
        <div className='main-conteiner'>
            <img className='main-img' src={mainImage} alt="main-img"/>
            <button className='main-btn'>Войти</button>
            <button className='main-btn'>Зарегестрироваться</button>
        </div>
    )
}

export default Main;