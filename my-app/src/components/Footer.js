import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>&copy; 2024 My App. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;