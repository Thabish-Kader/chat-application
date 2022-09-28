import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Banner.css';
import bannerImg from '../assets/header-img.svg';
import { Link } from 'react-scroll';


import Typewriter from 'typewriter-effect';

export const Banner = () => {
    return (
        <div id="banner" className='banner'>
            <Container className='banner-container'>
                <Row className='banner-row'>
                    <Col className='col1'>
                        <h1>Issue Tracker</h1>
                        <h2>We address Issues such as :

                            <Typewriter
                            options={{ loop:true}}
                            onInit={(typewriter) => {
                                typewriter.typeString('Academic Affairs ')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Emotional Affairs ')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Work Affairs ')
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                                
                            }}
                            />
                            </h2>
                        {/* <div id="banner-btn">
                        <Link to="services" className='get-started'><span>Get Started!</span></Link>
                        </div> */}

                        <div id="banner-btn-container">
                        <Link id='hover-btn' to="services"><span>Get Started!</span></Link>
                        </div>


                        
                    </Col>
                    <Col className='col2'>
                        <img src={bannerImg} alt="banner img"/>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}
