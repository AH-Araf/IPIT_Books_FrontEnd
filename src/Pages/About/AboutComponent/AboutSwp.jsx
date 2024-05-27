import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './q.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import a from "../../../assets/AboutImage/p1.png"
import b from "../../../assets/AboutImage/l1.jpg"
import c from "../../../assets/AboutImage/p2.jpg"
import d from "../../../assets/AboutImage/p3.jpg"
import e from "../../../assets/AboutImage/l2.jpg"
import f from "../../../assets/AboutImage/p4.jpg"

export default function AboutSwp() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className=' flex justify-center items-center mt-5'>
            <div className='w-96 border-2 px-3 e' data-aos-duration="2000" data-aos="fade-up">
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
                    
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='image-swp-size a' src={a} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size a' src={b} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size a' src={c} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size a' src={d} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size a' src={e} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size a' src={f} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className='image-swp-size' src={g} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='image-swp-size' src={h} alt="" /></SwiperSlide> */}
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
