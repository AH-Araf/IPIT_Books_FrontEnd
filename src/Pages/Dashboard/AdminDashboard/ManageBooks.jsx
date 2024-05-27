import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { deleteBook, getBooks } from '../../../api/books';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks(); 
    }, []);


    const fetchBooks = async () => {
        try {
            const data = await getBooks(); 
            setBooks(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getRowColor = (index) => {
        return index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300';
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this book!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const data = await deleteBook(id); 
                    Swal.fire(
                        'Deleted!',
                        data.message,
                        'success'
                    );
                    setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
                } catch (error) {
                    console.error('Error deleting book:', error);
                    Swal.fire(
                        'Error!',
                        'Failed to delete book.',
                        'error'
                    );
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your book is safe :)',
                    'info'
                );
            }
        });
    };

    return (
        <div>


            <div data-aos="zoom-in" className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='font-bold text-lg text-white bg-slate-700'>
                        <tr>
                            <th>Name</th>
                            <th className='hidden lg:block'>Writer</th>
                            <th>Price</th>
                            <th className='hidden lg:block'>Last Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className={getRowColor(index)}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.image} alt={book.bookName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.bookName}</div>
                                            <p className='lg:hidden'>{book.Writer}</p>
                                            <div className="text-sm opacity-50">{book.BookType}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='hidden lg:block'>
                                    {book.Writer}
                                    <br />
                                    <span className="badge badge-ghost badge-sm a">{book.Publishers}</span>
                                </td>
                                <td>{book.Price}</td>
                                <td className='hidden lg:block'>{book.LastUpdate}</td>
                                <td>
                                    <button className="btn text-red-700 e btn-red btn-xs font-bold" onClick={() => handleDelete(book._id)}>Delete</button>
                                    <Link to={`/dashboard/UpdateBook/${book._id}`} className="btn m-1 text-blue-600 e btn-red btn-xs font-bold">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooks;
