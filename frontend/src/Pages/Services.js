import React from 'react'
import '../styles/Services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card1, Card2, Card3, Card4 } from '../components/Cards';

export const Services = () => {
    return (
        <section id="services-section" className='services'>
        <Container className='grid-container'>
            <Row className='row'>
                <Col><Card4/></Col>
                <Col><Card2/></Col>
            </Row>
            <Row>
                <Col><Card3/></Col>
                <Col><Card1/></Col>
            </Row>
        </Container>
        </section>
    )
}
