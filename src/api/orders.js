const API_URL = import.meta.env.VITE_API_URL;

// Function to fetch orders
export const fetchOrders = async () => {
    try {
        const response = await fetch(`${API_URL}/orders`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export const fetchUserOrders = async (userEmail) => {
    try {
        const response = await fetch(`${API_URL}/userOrder?user=${encodeURIComponent(userEmail)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

