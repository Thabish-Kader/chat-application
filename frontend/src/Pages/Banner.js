import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Banner.css';
import bannerImg from '../assets/header-img.svg';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
    return (
        <div className='banner'>
            <Container className='banner-container'>
                <Row className='banner-row'>
                    <Col className='col1'>
                        <h1>Issue Tracker</h1>
                        <p>We address Issues such as : 
                        <TypeAnimation
                            sequence={[
                                'Acadamic Affairs', 
                                2000, // Waits 1s
                                'Emotional Affairs', 
                                2000, // Waits 2s
                                'Family Issues',
                                2000,
                            ]}
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em', color: 'purple' }}
                            />
                        </p>
                    </Col>
                    <Col className='col2'>
                        <img src={bannerImg} alt="banner img"/>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}
