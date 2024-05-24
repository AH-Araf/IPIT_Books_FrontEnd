const API_URL = import.meta.env.VITE_API_URL;

// Function to create a payment intent
export const createPaymentIntent = async (totalPrice) => {
    try {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ totalPrice }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
};
