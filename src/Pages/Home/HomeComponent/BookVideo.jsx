import  { useRef } from 'react';
import bookVideo from "../../../assets/Video/mp4.mp4";

const BookVideo = () => {
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        videoRef.current.play();
    };

    return (
        <div className="flex justify-center mt-10 mb-10"> 
            <video
                ref={videoRef}
                src={bookVideo}
                autoPlay
                muted
                onEnded={handleVideoEnded}
                controls={false}
                className='object-cover w-5/6 lg:h-[520px] rounded-2xl e' 
            />
        </div>
    );
};

export default BookVideo;
