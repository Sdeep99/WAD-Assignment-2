import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { addProduct, editProduct } from '../store/productSlice';
import './ProductForm.css';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name.trim() || !description.trim() || !String(price).trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
    };

    if (product) {
      dispatch(editProduct({ id: product.id, product: newProduct }));
    } else {
      dispatch(addProduct(newProduct));
    }

    navigate('/products');
  };

  return (
    <div className="product-form">
      <Container>
        <Row>
          <Col>
            <h1>{product ? 'Edit Product' : 'Add Product'}</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter product name"
                />
              </Form.Group>
              <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Enter product description"
                />
              </Form.Group>
              <Form.Group controlId="price" className="mb-4">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  placeholder="Enter price"
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit" className="btn-save">
                  Save
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate('/products')}
                  className="btn-cancel"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductForm;