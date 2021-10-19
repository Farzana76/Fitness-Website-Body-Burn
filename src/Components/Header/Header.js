import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/bg1.jpg';
import img2 from '../../img/bg2.png';
import img3 from '../../img/bg3.jpg';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {
    
    return (
        <>
        <Menu></Menu>
            <Carousel fade>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 className="display-1 mb-5 pb-5 quote">GET READY TO <br></br> BURN</h1>
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
                        {/* <Navbar></Navbar> */}
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        {/* <Navbar></Navbar> */}
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>        
        </>
    );
    
};

export default Header;