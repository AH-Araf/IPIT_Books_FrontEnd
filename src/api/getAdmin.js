import axios from 'axios';

export const getUserData = async (email) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/email?email=${email}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};



export const updateUser = async (email, updatedUser) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/users/${email}`, updatedUser);
        return response.data;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};
