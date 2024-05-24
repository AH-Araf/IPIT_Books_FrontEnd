import { useEffect, useState } from 'react';
import Title from '../../../ReuseableComponents/Title';
import { fetchDataFromApi } from '../../../ReuseableComponents/ApiFetching';
import Marquee from 'react-fast-marquee';

const Mar = () => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    const allAuthorsEndpoint = 'AllAuthors';

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await fetchDataFromApi(allAuthorsEndpoint);
            if (data) {
                setAuthors(data);
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    return (
        <div className="mt-10 author-image a pt-1">
            <Title a="Our Top Authors" />
            {loading ? (
                <div className="flex h-96 flex-col items-center justify-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <Marquee>
                    {authors.map((author) => (
                        <div className="flex flex-col justify-center items-center my-10" key={author._id}>
                            <img className="e" src={author.image} alt={author.AuthorName} />
                            <p className="mt-2">{author.AuthorName}</p>
                        </div>
                    ))}
                </Marquee>
            )}
        </div>
    );
};

export default Mar;
