import React from 'react';
import './index.css';
const Header = (props) => {
 

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
            <span onClick={()=>props.iconsRef[0].current.scrollIntoView({behavior: 'smooth'})} className='header-text'>
                Card 2
            </span>
            <br/>
            <span onClick={()=>props.iconsRef[1].current.scrollIntoView({behavior: 'smooth'})} className='header-text'>
                Card 3
            </span>
            <br/>
            <span onClick={()=>props.iconsRef[2].current.scrollIntoView({behavior: 'smooth'})} className='header-text'>
                Card 4
            </span>
            <br/>
            <span onClick={()=>props.iconsRef[4].current.scrollIntoView({behavior: 'smooth'})} className='header-text'>
                Minha foto
            </span>
            <br/>
            <span onClick={()=>props.iconsRef[3].current.scrollIntoView({behavior: 'smooth'})} className='header-text'>
                Contato
            </span>
        </div>
    );
};

    export default Header;