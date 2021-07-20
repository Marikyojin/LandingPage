import React from 'react';

const ContactContainer = ({cardRef}) =>{
    return(
        <div ref={cardRef}>
            <p>
                Contato
            </p>
        </div>
    );
};

export default ContactContainer;