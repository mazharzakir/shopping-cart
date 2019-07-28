import React from "react";
import { Row, Col, Image, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div >
            <Image src='http://c4rlh.com/wp-content/uploads/2016/11/who-we-are.png' className='header-image' />

            <Container>
                <Row>
                    <Col xs={12} sm={6}  >
                        <Image src='https://www.laco-watches.com/media/images/category/kategorie-historie-fliegeruhren.jpg' className='about-Profile-Pic1' />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Introducton</h3>
                        <p>Hey!! My name is Mazhar. and i am a Onlne Shop seller. and   i have sale All types of Shoes Watches And Mobile Phones.I have started My onlne shop Snce 2004. I have no other branch </p>
                        <h3>More About Us</h3>
                        <p>Our shopping Cart is a website which serves as an electronic platform for selling and buying online. It is the world’s biggest marketplace for garage sale, online shopping center, car dealer and auction site. This platform ensures the smooth business transactions among millions of people locally, nationally and internationally. The site is made free for buyers but sellers pay little for listing their items. </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}  >
                        <Image src='https://i.ebayimg.com/images/g/qRwAAOSwaRRcin7W/s-l400.jpg' className='about-Profile-Pic2' />
                        <h3> Benefits of Shoes</h3>
                        <p>The shoe drive not only inspired those in our community to come out and support a worthy cause,
                            it also reminded us of why proper footwear is so important in the first place.Shoes not only help our feet to heal but can also aid in support and stability of our foot.
             Not all feet are perfect, so properly fitting shoes can help align your feet, ankles, knees, hips and back to correct your gait and improve posture</p>
                    </Col>
                    <Col xs={12} sm={4}  ><Image src='https://dappered.com/wp-content/uploads/2012/01/Rubber-band-watches.jpg' className='about-Profile-Pic2' />
                        <h3>Stylish Watches For Mens</h3>
                        <p>They say that first impression is the last impression.
                             A good wrist watch can go a long way in helping men create a lasting impression,
                             provided it matches their attire and the occasion.
                             Men’s watches are designed in different styles to suit different occasions from formal
                              to semi-formal to casual occasions.
              A watch does more than just telling you the time.</p>
                    </Col>
                    <Col xs={12} sm={4}  ><Image src='https://www.maketecheasier.com/assets/uploads/2019/05/Featured-cellphone-call-400x200.jpg' className='about-Profile-Pic2' />
                        <h3>Advantages of Mobile</h3>
                        <p>Mobile phones (or cell phones as they are often called in the USA) have radically altered the way that people work, socialize, organize, and entertain themselves.From their beginnings as bulky car phones in the 1980's, mobile phones went on to become multimedia communication devices with a level of computing power seen in desktops only a short number of years before.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;