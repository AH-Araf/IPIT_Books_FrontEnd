
import Title from '../../../ReuseableComponents/Title';
import cotRed from '../../../assets/AboutImage/cotRed.png'
import Comment from './Comment';
const FeedBack = () => {
    return (
        <div className='mt-52'>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
                <Title a="Our Clients Feedback"/>
                <div className=' flex justify-center items-center'>
                    <p className='mb-7 w-96  text-justify'>IPIT Books is a premier online destination for book enthusiasts, offering a curated collection of literature across various genres. As a book selling website, IPIT Books prides itself on providing customers with a seamless shopping experience.</p>
               </div>
                <div className='flex justify-center '>
                    <img className='h-14 w-16' src={cotRed} alt="" />
                </div>
            </div>

            <div className=''>
                <Comment />
            </div>
        </div>
    );
};

export default FeedBack;