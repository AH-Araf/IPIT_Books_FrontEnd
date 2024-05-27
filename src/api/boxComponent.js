import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to get all books
export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/allBooks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching the books:', error);
        return [];
    }
};

// Function to get all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching the users:', error);
        return [];
    }
};

// Function to get all reviews
export const fetchReviews = async () => {
    try {
        const response = await axios.get(`${API_URL}/review`);
        console.log('Reviews fetched:', response.data);  // Add this line to log the fetched reviews
        return response.data;
    } catch (error) {
        console.error('Error fetching the reviews:', error);
        return [];
    }
};

// Function to get all orders
export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching the orders:', error);
        return [];
    }
};
