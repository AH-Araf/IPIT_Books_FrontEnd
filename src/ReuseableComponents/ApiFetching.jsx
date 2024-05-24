/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const baseApi = `${import.meta.env.VITE_API_URL}`;

const fetchDataFromApi = async (endpoint) => {
    try {
        const response = await fetch(`${baseApi}/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const ApiFetching = ({ endpoint }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApiData = async () => {
            const fetchedData = await fetchDataFromApi(endpoint);
            if (fetchedData) {
                setData(fetchedData);
            }
        };
        fetchApiData();
    }, [endpoint]);

    return null; // or you can return some UI if needed
};

export { ApiFetching, fetchDataFromApi };
