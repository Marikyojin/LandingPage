import React, { useRef } from 'react';
import Header from '../header';
import Card from '../card';
import ContactContainer from '../contatctContainer';
import './index.css';



const Body = () => {
    const cardRef = useRef();
    const terceiroRef = useRef();
    const segundoRef = useRef();
    const quartoRef = useRef();


    return (
        <div id="body">
            <Header iconsRef={[segundoRef, terceiroRef,quartoRef, cardRef]} />
            <div className="body-container">
                <Card
                    title="Card 1"
                    description="gatinho fofo"
                    img="https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png?quality=85&strip=info&resize=680,453"
                    name="gatinho fofo"
                    titleImg="gatinho fofo"
                />
                <Card
                    iconsRef={segundoRef}
                    title="Card 2"
                    description="Segundo card"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIr8L75Ir5JYs-UW5KzwYfdGhhm5Rr8E1fw&usqp=CAU"
                    name="gato andando"
                    titleImg="gato andando"
                />
                <Card
                    iconsRef={terceiroRef}
                    title="Card 3"
                    description="gatinho fofo 2"
                    img="data:image/jpeg;base64,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"
                    name="gatinho fofo 2"
                    titleImg="gatinho fofo 2"
                />
                <Card
                    iconsRef={quartoRef}
                    title="Card 4"
                    description="gatinho que é astronauta"
                    img="https://img.r7.com/images/dia-internacional-do-gato-instagram-08082019161529430?dimensions=771x420&no_crop=true"
                    name="gatinho astronauta"
                    titleImg="gatinho astronauta"
                />


                <ContactContainer cardRef={cardRef} />
            </div>
        </div>
    );
};

export default Body;