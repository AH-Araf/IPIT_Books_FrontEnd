const API_URL = import.meta.env.VITE_API_URL;

export const addMessage = async messageData => {
    const response = await fetch(`${API_URL}/message`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(messageData),
    })
    const data = await response.json()
    return data;
}

// Function to fetch messages
export const fetchMessages = async () => {
    try {
        const response = await fetch(`${API_URL}/message`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};