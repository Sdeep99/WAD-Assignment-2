import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getProductById } from '../services/api';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ProductDetails.css';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const [location, setLocation] = useState({ lat: 38.8977, lng: 77.0365 });

  useEffect(() => {
    if (!product) {
      dispatch(getProductById(id));
    }
  }, [id, product, dispatch]);


  if (!product) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Container>
        <Row>
          <Col>
            <h1>{product.name}</h1>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Card.Title>Product Details</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                  </Col>
                  <Col md={6}>
                    <LoadScript googleMapsApiKey="AIzaSyBYNV1NfTps8-puNkDV_YjXqp7fcPmtU4c">
                      <GoogleMap
                        mapContainerStyle={{ height: '300px', width: '100%' }}
                        center={location}
                        zoom={10}
                      >
                        <Marker position={location} />
                      </GoogleMap>
                    </LoadScript>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/products/${product.id}/edit`}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button variant="secondary" as={Link} to="/products">
                    Back to List
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;