const API_URL = import.meta.env.VITE_API_URL;


// Function to get all books
export const getBooks = async () => {
    try {
        const response = await fetch(`${API_URL}/allBooks`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};


// Function to post a new book
export const postBook = async (bookDetails) => {
    try {
        const response = await fetch(`${API_URL}/postBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookDetails),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error posting book:", error);
        throw error;
    }
};

// Function to delete a book
export const deleteBook = async (id) => {
    try {
        const response = await fetch(`${API_URL}/deleteBooks/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};


// Function to update a book
export const updateBook = async (id, updatedBookDetails) => {
    try {
        const response = await fetch(`${API_URL}/updateBook/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBookDetails),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
};

export const fetchReviews = async (bookId, setReviews) => {
    try {
        const response = await fetch(`${API_URL}/userReview?bookId=${bookId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
};

// Function to post a new review
export const postReview = async (reviewDetails) => {
    try {
        const response = await fetch(`${API_URL}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewDetails),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error posting review:", error);
        throw error;
    }
};
