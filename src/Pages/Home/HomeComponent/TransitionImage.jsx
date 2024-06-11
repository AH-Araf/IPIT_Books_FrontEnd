/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Title from '../../../ReuseableComponents/Title';
import { fetchDataFromApi } from '../../../ReuseableComponents/ApiFetching';
// import './TransitionImage.css'; 

const TransitionImage = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [apiImages, setApiImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const allBooks = 'allBooks';
    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await fetchDataFromApi(allBooks);
            if (data) {
                setApiImages(data);
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    const showNextItems = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % apiImages.length);
    };

    useEffect(() => {
        const interval = setInterval(showNextItems, 1000); // Keep original interval
        return () => clearInterval(interval);
    }, [apiImages]);

    return (
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <Title a="Our Latest Books" />
            <div className="flex justify-center items-center">
                <div className="carousel carousel-center w-full">
                    {loading ? (
                        [0, 1, 2, 3].map((offset) => (
                            <div key={startIndex + offset} className={`carousel-item ${offset === 0 ? 'active' : ''}`}>
                                <div className="skeleton w-72 h-96 m-4 rounded-xl shadow-2xl"></div>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="carousel carousel-center p-4 space-x-4 rounded-box md:hidden">
                                <div className="overlay-container">
                                    <img className="e rounded-box w-72 h-96 mx-auto" src={apiImages[startIndex].image} alt="Book" />
                                    <div className="overlay">
                                        <div className="overlay-text font-serif">{apiImages[startIndex].bookName}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel carousel-center p-4 space-x-4 rounded-box hidden md:flex lg:hidden">
                                {[0, 1].map((offset) => (
                                    <div key={startIndex + offset} className="overlay-container">
                                        <img className="e rounded-box w-72 h-96 mx-auto" src={apiImages[(startIndex + offset) % apiImages.length].image} alt="Book" />
                                        <div className="overlay">
                                            <div className="overlay-text font-serif">{apiImages[(startIndex + offset) % apiImages.length].bookName}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="carousel carousel-center p-4 space-x-4 rounded-box hidden lg:flex">
                                {[0, 1, 2, 3].map((offset) => (
                                    <div key={startIndex + offset} className="overlay-container">
                                        <img className="e rounded-box w-72 h-96 mx-auto" src={apiImages[(startIndex + offset) % apiImages.length].image} alt="Book" />
                                        <div className="overlay">
                                            <div className="overlay-text font-serif">{apiImages[(startIndex + offset) % apiImages.length].bookName}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransitionImage;
