import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchProducts, removeProduct } from '../store/productSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className="product-list">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1>Product List</h1>
              <Link to="/products/new" className="btn btn-primary">
                Add Product
              </Link>
            </div>
            {status === 'loading' && (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {status === 'failed' && (
              <div className="text-center text-danger">
                Error occurred while fetching products.
              </div>
            )}
            <Row>
              {products.map((product) => (
                <Col key={product.id} sm={6} md={4} lg={3}>
                  <Card className="mb-4 product-card">
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="primary"
                          as={Link}
                          to={`/products/${product.id}`}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;