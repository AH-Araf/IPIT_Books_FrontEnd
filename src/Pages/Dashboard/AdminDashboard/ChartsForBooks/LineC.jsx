import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getBooks } from '../../../../api/books';

const LineC = () => {
    const [bookStats, setBookStats] = useState([]);

    useEffect(() => {
        getBooks()
            .then(data => {
                // Count occurrences of each book type
                const stats = {};
                data.forEach(book => {
                    if (stats[book.BookType]) {
                        stats[book.BookType]++;
                    } else {
                        stats[book.BookType] = 1;
                    }
                });
                // Convert stats object to an array of objects
                const statsArray = Object.keys(stats).map(key => ({ bookType: key, count: stats[key] }));
                setBookStats(statsArray);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div data-aos="fade-left"  style={{ width: '400px', height: '350px' }}>
            <ResponsiveContainer>
                <LineChart
                    data={bookStats}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookType" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineC;
