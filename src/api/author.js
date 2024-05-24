const API_URL = import.meta.env.VITE_API_URL;

// Function to get all authors
export const getAuthors = async () => {
    try {
        const response = await fetch(`${API_URL}/AllAuthors`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching authors:", error);
        return [];
    }
};

// Function to delete an author
export const deleteAuthor = async (id) => {
    try {
        const response = await fetch(`${API_URL}/deleteAuthor/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting author:', error);
        throw error;
    }
};

export const postAuthor = async (newAuthor) => {
    try {
        const response = await fetch(`${API_URL}/postAuthor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAuthor),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding author:', error);
        throw error;
    }
};

// Function to get all authors
export const getAllAuthors = async () => {
    try {
        const response = await fetch(`${API_URL}/AllAuthors`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw error;
    }
};