import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavComp from './NavComp';

const Homepage = () => {
    return (

        <>
        <NavComp />
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://static.guvi.in/course-thumbnail/webps/python.webp" />
                        <Card.Body>
                            <Card.Title>Python Objects 101: How to</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={7} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Eanow5KE7mAKgb_NVFqOxwHaED?w=740&h=405&rs=1&pid=ImgDetMain" />
                        <Card.Body>
                            <Card.Title>Machine Learning</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.8ka9U_gXViouVL6IpjW7oQHaEX?rs=1&pid=ImgDetMain" />
                    <Card.Body>
                        <Card.Title>Unlocking Power of NLP</Card.Title>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
        </>
    )
}

export default Homepage