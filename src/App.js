import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="background-wrapper object-fit_contain">
        <Container className="content-wrapper">
          <Row>
            <Col>12 column layout</Col>
          </Row>
          <Row>
            <Col md={8}>8</Col>
            <Col md={4}>4</Col>
          </Row>
          <Row>
            <Col md={6}>6</Col>
            <Col md={6}>6</Col>
          </Row>
          <Row>
            <Col md={3}>3</Col>
            <Col md={3}>3</Col>
            <Col md={3}>3</Col>
            <Col md={3}>3</Col>
          </Row>
          <Row className="footer">
          <Col md={1}>Footer</Col>
            <Col>3</Col>
            <Col>6</Col>
            <Col>9</Col>
            <Col>12</Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
