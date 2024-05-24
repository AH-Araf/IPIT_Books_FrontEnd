import { useState, useEffect } from 'react';
import Title from '../../../ReuseableComponents/Title';
import { getBooks } from '../../../api/books';

const TransitionImage = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [apiImages, setApiImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await getBooks();
                const fetchedImages = data.map(book => book.image);
                setApiImages(fetchedImages);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const showNextItems = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % apiImages.length);
    };

    useEffect(() => {
        const interval = setInterval(showNextItems, 1000);

        return () => clearInterval(interval);
    }, [apiImages]);

    return (
        <div>
            <Title a="Our Latest Books" />
            <div className='flex justify-center items-center'>
                <div className="carousel carousel-end rounded-box">
                    {loading ? ( 
                        [0, 1, 2, 3].map((offset) => (
                            <div key={startIndex + offset} className={`carousel-item ${offset === 0 ? 'active' : ''}`}>
                                <div className="skeleton w-72 h-96 m-4 rounded-xl e shadow-2xl"></div>
                            </div>
                        ))
                    ) : (
                        [0, 1, 2, 3].map((offset) => (
                            <div key={startIndex + offset} className={`carousel-item ${offset === 0 ? 'active' : ''}`}>
                                <img className='m-4 rounded-xl e w-72 shadow-2xl h-96' src={apiImages[(startIndex + offset) % apiImages.length]} alt="Book" />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransitionImage;
