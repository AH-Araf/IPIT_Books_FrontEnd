import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './p.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../../ReuseableComponents/ApiFetching';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

export default function PhotoSwp() {
    const [apiBooks, setApiBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const allBooks = 'allBooks';
    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await fetchDataFromApi(allBooks);
            if (data) {
                const fetchedBooks = data.map(book => ({
                    image: book.image,
                    bookName: book.bookName,
                    BookType: book.BookType,
                    Price: book.Price,
                    _id: book._id,
                }));
                setApiBooks(fetchedBooks);
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    return (
        <div>
            <div>
                {loading ? (
                    <div className='flex flex-col pt-10 items-center justify-center bg-black'>
                        <p><Loader /></p>
                        <p className='text-white'>Loading...</p>
                    </div>
                ) : (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <div>
                            {apiBooks.map((book, index) => (
                                <SwiperSlide key={index} className='hover:bg-emerald-100 e border-2 rounded-2xl border-slate-200'>
                                    <Link to={`/book/${book._id}`} className="">
                                        <div className="overlay-container">
                                            <img
                                                className='rounded-xl'
                                                src={book.image}
                                                alt={`Slide ${index}`}
                                                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                                            />
                                            <div className="overlay">
                                                <div className="overlay-text">{book.bookName}</div>
                                            </div>
                                        </div>
                                        <p className='font-bold'>{book.bookName}</p>
                                        <p><span className='font-bold text-orange-600'>Type: </span>{book.BookType}</p>
                                        <p><span className='font-bold text-orange-600'>Price: </span>{book.Price} Taka</p>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                )}
            </div>
        </div>
    );
}
