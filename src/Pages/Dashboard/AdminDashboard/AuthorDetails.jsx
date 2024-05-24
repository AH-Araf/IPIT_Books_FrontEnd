/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { deleteAuthor, getAuthors } from '../../../api/author';

const AuthorDetails = ({ authors, setAuthors }) => {
    useEffect(() => {
        if (authors.length === 0) {
            getAuthors()
                .then(data => setAuthors(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [authors, setAuthors]);

    const getRowColor = (index) => {
        return index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300';
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this author!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAuthor(id)
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            data.message,
                            'success'
                        );
                        setAuthors(prevAuthors => prevAuthors.filter(author => author._id !== id));
                    })
                    .catch(error => {
                        console.error('Error deleting author:', error);
                        Swal.fire(
                            'Error!',
                            'Failed to delete author.',
                            'error'
                        );
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your author is safe :)',
                    'info'
                );
            }
        });
    };

    return (
        <div data-aos="zoom-in" className="overflow-x-auto rounded-2xl">
            <table className="table">
                <thead className='font-bold text-lg text-white bg-slate-700'>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => (
                        <tr key={author._id} className={getRowColor(index)}>
                            <td className='font-bold'>{author.AuthorName}</td>
                            <td><img className='w-16 h-16 rounded-full e p-1' src={author.image} alt="" /></td>
                            <td>
                                <button className="btn text-red-700 e btn-red btn-xs font-bold" onClick={() => handleDelete(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorDetails;
