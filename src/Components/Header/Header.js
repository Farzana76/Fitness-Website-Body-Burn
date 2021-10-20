import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/bg1.jpg';
import img2 from '../../img/bg2.png';
import img3 from '../../img/bg3.jpg';
import './Header.css';

const Header = () => {
    
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">GET READY TO<br></br>BURN</h1>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Don't be late for another day!</h3>
                        <h5>Join today</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">BE FIT,<br></br>BE HEALTHY</h1>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Maintain proper BMI</h3>
                        <p>Clock's ticking</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">HEALTH IS THE KEY<br></br>TO HAPPINESS</h1>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Want healthy mind?</h3>
                        <p>Don't be late to join</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>        
        </>
    );
    
};

export default Header;