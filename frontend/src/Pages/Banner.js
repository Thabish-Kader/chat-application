import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Banner.css';
import bannerImg from '../assets/header-img.svg';

import Typewriter from 'typewriter-effect';

export const Banner = () => {
    return (
        <div className='banner'>
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

                        <div className="banner-btn">
                        <a href="#link"><span>Get Started!</span></a>
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
