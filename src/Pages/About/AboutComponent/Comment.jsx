
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Comment() {
    return (
        <div className=' lg:mx-96'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                <SwiperSlide className='border-2 a'>
                    <div>
                        <p className='w-96 text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <p className='mt-3 text-blue-600'>Arafat Hossain</p>
                        <p className='text-sm font-semibold'>Business Man, Cumilla</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border-2 a'>
                    <div>
                        <p className='w-96 text-sm'>“Lorem ipsmpor incididunt fd ut gfhfghfg dfghdfhd ergerg  dsgdhgtr dgdfglabore et dm, quis nostrud exercitation ullamco laboris nisi”</p>
                        <p className='mt-3 text-blue-600'>Takrim Zaman</p>
                        <p className='text-sm font-semibold'>Engineer, Dhaka</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border-2 a'>
                    <div>
                        <p className='w-96 text-sm'>“Lorem iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <p className='mt-3 text-blue-600'>Md. Hadi</p>
                        <p className='text-sm font-semibold'>Doctor, Dhaka</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border-2 a'>
                    <div>
                        <p className='w-96 text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <p className='mt-3 text-blue-600'>Tahmina Laboni</p>
                        <p className='text-sm font-semibold'>Teacher, Cumilla</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
