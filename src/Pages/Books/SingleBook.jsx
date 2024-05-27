//SingleBook.jsx
import { useContext, useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import QRCode from "qrcode.react";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import BookReview from './BookReview';
import Title from '../../ReuseableComponents/Title';
import { fetchReviews } from '../../api/books';



const SingleBook = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [reviews, setReviews] = useState([]);
    const bookData = useLoaderData();

    const {
        bookName,
        image,
        Writer,
        Price,
        Publishers,
        NumberofPage,
        BookType,
        LastUpdate,
        Description,
        ReadMore,
        _id
    } = bookData;

    const addToCart = () => {
        const newItem = {
            bookName,
            image,
            Writer,
            Price,
            Publishers,
            NumberofPage,
            BookType,
            LastUpdate,
            Description,
            _id
        };
        const updatedCart = [...cartItems, newItem];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: `${bookName} has been added to your cart.`,
            showConfirmButton: false,
            timer: 3000
        });
    };

    const updateReviews = (newReview) => {
        setReviews(prevReviews => [newReview, ...prevReviews]);
    };

    useEffect(() => {
        // Call fetchReviews function from book.js
        fetchReviews(_id, setReviews);
    }, [_id]);

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    };

    return (
        <div>
            <div style={backgroundImageStyle}>
                <div className="flex flex-col" style={overlayStyle}>
                    <img className="h-60 w-44 rounded-xl border-2 border-white e" src={image} alt="" />
                    <h2 className="text-xl font-serif mt-3">{bookName}</h2>
                </div>
            </div>

            <div className="flex justify-center e rounded-md p-1 items-center gap-3 lg:text-xl font-bold mx-6 my-1">
                <p className="bg-slate-200 rounded-lg">Description:</p>
                <Marquee>
                    <p>{Description}</p>
                </Marquee>
            </div>

            <div className="lg:flex justify-center items-center gap-10 mt-8 a p-10 rounded-xl mx-10">
                <div className="rounded-xl">
                    <img className="h-72 w-52 rounded-xl border-2" src={image} alt="" />
                </div>
                <div className="w-[300px]">
                    <h2 className="text-3xl font-serif mt-3">{bookName}</h2>
                    <p className="font-semibold text-green-500">Writer: {Writer}</p>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Price:</span> {Price} Taka/-</p>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Publishers:</span> {Publishers}</p>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Number of Pages:</span> {NumberofPage}</p>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Book Type:</span> {BookType}</p>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Last Update:</span> {LastUpdate}</p>
                    <div className='mt-5'>
                        {user ? (
                            <button className='e btn btn-error text-white text-lg' onClick={addToCart}>Add to Cart</button>
                        ) : (
                            <Link className='e btn btn-error text-white text-lg' to='/login'>Login to Buy</Link>
                        )}
                    </div>
                </div>
                <div>
                    <p className="text-blue-500 font-bold"><span className="text-red-600 font-bold">Scan for Read:</span></p>
                    <div>
                        <QRCode style={{ height: "auto", maxWidth: "100%", width: "100%" }} className="e border-4 p-1 rounded-lg border-blue-300" value={ReadMore} />
                    </div>
                </div>
            </div>
            <section className='flex flex-col justify-center items-center mt-20'>
                <Title a="Review Section" />
                <div className='lg:flex justify-center gap-10 '>
                    <div data-aos-duration="2000" data-aos="fade-right" className='a border-2 w-96 p-2 h-96 mt-10 overflow-auto '>
                        {reviews.length === 0 ? (
                            <div className="flex flex-col justify-center items-center mt-20">
                                <p className='text-md font-bold text-red-500'>No Review Added</p>
                                <p className='text-sm font-bold text-green-500'>Add First Comment</p>
                            </div>
                        ) : (
                            reviews.map(review => (
                                <div key={review._id} className="bg-emerald-100 a p-3 m-2 my-4">
                                    <p className='text-lg font-semibold font-serif text-black'>{review.reviewerName}</p>
                                    <p className='font-bold text-slate-500'>{review.review}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-left" className='w-96 border-2 a p-2 mt-10 bg-emerald-100'>
                        <BookReview bookId={_id} bookName={bookName} updateReviews={updateReviews} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleBook;
