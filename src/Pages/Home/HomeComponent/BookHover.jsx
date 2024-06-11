import  { useEffect, useState } from 'react';
import axios from 'axios';
import './BookHover.css';

const CustomBookHover = () => {
    const [books, setBooks] = useState([]);
    const [hoveredBook, setHoveredBook] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/allBooks')
            .then(response => {
                setBooks(response.data.slice(0, 6)); // Show only the first 6 books
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="custom-book-container">

            <div className="custom-books-list">
                {books.map(book => (
                    <div
                        key={book._id}
                        className="custom-book-card"
                        onMouseEnter={() => setHoveredBook(book)}
                        onMouseLeave={() => setHoveredBook(null)}
                    >
                        <div className="custom-book-card-inner">
                            <img className='h-56 w-32 rounded-lg border-4 border-slate-500' src={book.image} alt={book.bookName} />
                            {/* <div className="custom-book-title">{book.bookName}</div> */}
                        </div>
                    </div>
                ))}
            </div>

            <div className="custom-book-details-container">
                {hoveredBook && (
                    <div className="custom-book-details">
                        <h2>{hoveredBook.bookName}</h2>
                        <p><strong>Writer:</strong> {hoveredBook.Writer}</p>
                        <p><strong>Price:</strong> {hoveredBook.Price}</p>
                        <p><strong>Publishers:</strong> {hoveredBook.Publishers}</p>
                        <p><strong>Number of Pages:</strong> {hoveredBook.NumberofPage}</p>
                        <p><strong>Type:</strong> {hoveredBook.BookType}</p>
                        <p><strong>Last Update:</strong> {hoveredBook.LastUpdate}</p>
                        <p><strong>Description:</strong> {hoveredBook.Description}</p>
                        <p><strong>Read More:</strong> {hoveredBook.ReadMore}</p>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default CustomBookHover;
