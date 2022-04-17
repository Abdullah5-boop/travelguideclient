import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const NavBar = () => {
    return (
        <div className='mb-5' >
            <div>
                <Carousel fade className=''>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//i.ibb.co/N62YTFD/chastagner-thierry-1z-Flrp-WTs3-Y-unsplash.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                   
                </Carousel>
            </div>
        </div>
    );
};

export default NavBar;