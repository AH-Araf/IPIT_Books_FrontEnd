import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getBooks } from '../../../../api/books';

const BarC = () => {
    const [bookStats, setBookStats] = useState([]);

    useEffect(() => {
        getBooks()
            .then(data => {
                const stats = {};
                data.forEach(book => {
                    if (stats[book.BookType]) {
                        stats[book.BookType]++;
                    } else {
                        stats[book.BookType] = 1;
                    }
                });
                const statsArray = Object.keys(stats).map(key => ({ bookType: key, count: stats[key] }));
                setBookStats(statsArray);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div data-aos="fade-right" style={{ width: '600px', height: '350px' }}>
            <ResponsiveContainer>
                <BarChart
                    data={bookStats}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barCategoryGap={20} // Adjust the gap between bars as needed
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookType" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" barSize={30} /> {/* Customize bar size */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarC;
