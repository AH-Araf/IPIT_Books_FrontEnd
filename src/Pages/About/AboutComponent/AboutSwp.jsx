import  { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './q.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import a from "../../../assets/Book/a.jpg"
import b from "../../../assets/Book/b.png"
import c from "../../../assets/Book/c.jpg"
import d from "../../../assets/Book/d.jpg"
import e from "../../../assets/Book/e.jpg"
import f from "../../../assets/Book/f.jpg"
import g from "../../../assets/Book/g.jpg"
import h from "../../../assets/Book/h.jpg"

export default function AboutSwp() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='lg:w-2/3'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='image-swp-size' src={a} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={b} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={c} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={d} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={e} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={f} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={g} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={h} alt="" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
