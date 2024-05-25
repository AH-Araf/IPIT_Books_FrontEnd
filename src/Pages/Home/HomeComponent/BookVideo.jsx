import { useRef, useEffect } from 'react';
import bookVideo from "../../../assets/Video/mp4.mp4";

const BookVideo = () => {
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        videoRef.current.play();
    };

    const handleFullscreenChange = () => {
        if (document.fullscreenElement === videoRef.current) {
            videoRef.current.play();
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div className="flex justify-center mt-5 mb-5">
            <video
                ref={videoRef}
                src={bookVideo}
                autoPlay
                muted
                onEnded={handleVideoEnded}
                controls={false}
                className='object-cover w-5/6 lg:h-[520px] rounded-2xl '
            />
        </div>
    );
};

export default BookVideo;
