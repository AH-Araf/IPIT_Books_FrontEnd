import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookLoader from '../Shared/Loader/BookLoader';
import { fetchDataFromApi } from '../../ReuseableComponents/ApiFetching';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [loading, setLoading] = useState(true);

    const allBooks = 'allBooks';
    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await fetchDataFromApi(allBooks);
            if (data) {
                setBooks(data);
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    const filteredBooks = books.filter(book =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedType === '' || book.BookType === selectedType)
    );

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">Books</h2>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search by book name"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full mr-4"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="border border-gray-300 rounded-md px-4 py-2"
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    <option value="">All Types</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Science">Science</option>
                    <option value="Story">Story</option>
                    <option value="Poetry">Poetry</option>
                </select>
            </div>
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <BookLoader key={index} />
                    ))}
                </div>

            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map(book => (
                        <div data-aos="fade-up" data-aos-duration="2000" key={book._id} className="bg-white rounded-md e p-4 my-6 lg:mx-10">
                            <div className="overlay-container mb-4">
                                <img src={book.image} alt={book.bookName}
                                    className="rounded-lg e w-44 h-60 object-cover"
                                />
                                <div className="overlay">
                                    <div className="overlay-text font-serif">{book.bookName}</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">{book.bookName}</h3>
                            <p className="text-gray-500 mb-2 font-semibold">{book.Writer}</p>
                            <p className="text-gray-600 mb-2">Price: <span className='text-green-500 font-semibold'>{book.Price} Taka/-</span></p>
                            <p className="text-gray-600 mb-4">{book.Description.substring(0, 70)}<Link to={`/book/${book._id}`} className="text-blue-500 font-semibold"> ...Read More</Link></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Books;
