import React from "react";
import { Row, Col, Image, Container } from 'react-bootstrap';


const Contact = () => {
    return (
        <div >
            <Image src='https://www.firstpointmechanical.com/_imagecache/Contact%20us2.jpg' className='header-image' />

            <Container className="contact-us" >
                <Row>
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='data:image/jpeg;base64,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' className='profile-image' />
                        <h5>Moble Num</h5>
                        <p>03034-3491472</p>
                        <h5>Telephone Num</h5>
                        <p>0321-45-44-45456</p>

                    </Col>

                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtriC4DruE_nlF5yuYWGyFon7YR0ve2bVXEkQiB5Y9LJmu_gKS' className='profile-image' />
                        <h5>EMAIL</h5>
                        <p>mazharzakir100@gmal.com</p>
                        <h5>Fax</h5>
                        <p>7622-343-434</p>

                    </Col>

                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdWKr9AmNMtEFNNHuvZS0Bh5DxYMyJfSgLLNVCYk5OrWKLtB6TQ' className='profile-image' />
                        <h5>ADRESS</h5>
                        <p> Mehmoodabad no 6 laquat ashraf colony no 2  shop no 2 saddar arach pastan.
                        Mehmoodabad no 6 laquat ashraf colony no 2  shop no 2 saddar arach pastan
                        Mehmoodabad no 6 laquat ashraf colony no 2  shop no 2 saddar arach pastan
        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;