import React, { useEffect, useState, useRef } from 'react';
import './index.css';
const Header = ({cardRef}) => {
 

    return(
        <div className='header'>
            <span className='header-title'>
                Header title
            </span>
            <br/>
            <span className='header-text'>
                Header conteudo
            </span>
            <br/>
            <span className='header-text'>
                Card 1
            </span>
            <br/>
            <span className='header-text'>
                Card 2
            </span>
            <br/>
            <span onClick={()=>cardRef.current.scrollIntoView()} className='header-text'>
                Contato
            </span>
        </div>
    );
};

    export default Header;