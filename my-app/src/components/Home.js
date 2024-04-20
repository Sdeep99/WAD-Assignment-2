import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <h1 className="home-title">Welcome to My App</h1>
            <p className="home-description">
              This is the home page of the application. Discover amazing products and explore our features.
            </p>
            <div className="home-cta">
              <Button variant="primary" size="lg" as={Link} to="/products">
                View Products
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={4} className="text-center">
            <div className="home-feature">
              <i className="fas fa-shopping-cart fa-3x"></i>
              <h3>Easy Shopping</h3>
              <p>Browse and purchase products with just a few clicks.</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="home-feature">
              <i className="fas fa-credit-card fa-3x"></i>
              <h3>Secure Payments</h3>
              <p>Enjoy safe and secure transactions using our trusted payment gateway.</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="home-feature">
              <i className="fas fa-truck fa-3x"></i>
              <h3>Fast Shipping</h3>
              <p>Get your products delivered to your doorstep in no time.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;