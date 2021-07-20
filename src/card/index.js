import React from 'react';


const Card = (props) => {
    return (
        <div className={props.className}>
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt={props.name} title={props.titleImg}/>
            </div>

            <div className="bid-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br />
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default Card;