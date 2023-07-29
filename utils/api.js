import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace this with your API base URL

// Example function for fetching product data from the server
export async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

// Example function for fetching a single product by slug from the server
export async function fetchProductBySlug(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug "${slug}":`, error);
    return null; // Return null or handle the error as needed
  }
}

// Add more API functions as needed for your application

export async function fetchCartItems() {
  // Your implementation for fetching cart items from the server
}

export async function postOrder(orderData) {
  // Your implementation for posting an order to the server
}