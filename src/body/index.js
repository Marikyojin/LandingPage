import React, {useRef} from 'react';
import Header from '../header';
import Card from '../card';
import ContactContainer from '../contatctContainer';
import './index.css';
const Body = () =>{
    const cardRef = useRef(null);

    return(
        <div id="body">
            <Header cardRef={cardRef}/>
            <div className="body-container">
            <Card
            title="Card 1"
            description="gatinho fofo"
            img="https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png?quality=85&strip=info&resize=680,453"
            name="gatinho fofo"
            titleImg="gatinho fofo"
            />
            <Card
            title="Card 2"
            description="Segundo card"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIr8L75Ir5JYs-UW5KzwYfdGhhm5Rr8E1fw&usqp=CAU"
            name="gato andando"
            titleImg="gato andando"
            />
            
            <ContactContainer cardRef={cardRef}/>
            </div>
        </div>
    );
};

export default Body;