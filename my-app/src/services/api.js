import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const getProducts = () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const getProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};

export const createProduct = (product) => {
  return axios.post(`${API_BASE_URL}/products`, product);
};

export const updateProduct = (id, product) => {
  return axios.put(`${API_BASE_URL}/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_BASE_URL}/products/${id}`);
};