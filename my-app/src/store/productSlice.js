// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await getProducts();
  return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  const response = await createProduct(product);
  return response.data;
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, product }) => {
  const response = await updateProduct(id, product);
  return response.data;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (id) => {
  await deleteProduct(id);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload);
        if (index !== -1) {
          state.products.splice(index, 1);
        }
      });
  },
});

export default productSlice.reducer;