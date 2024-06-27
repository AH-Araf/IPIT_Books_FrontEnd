
import Title from '../../../ReuseableComponents/Title';
import cotRed from '../../../assets/AboutImage/cotRed.png'
import Comment from './Comment';
const FeedBack = () => {
    return (
        <div className='mt-52'>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
                <Title a="ক্লায়েন্ট ফিডব্যাক"/>
                <div className=' flex justify-center items-center'>
                    <p className='mb-7 w-96  text-justify'>ইত্যাদি শপ একটি প্রাধান্যমূলক অনলাইন গন্তব্য বই প্রেমীদের জন্য, বিভিন্ন জাতের সাহিত্যের একটি পরিচালিত সংগ্রহ অনুষ্ঠিত করে। একটি বই বিক্রয় ওয়েবসাইট হিসাবে, ইত্যাদি শপ গ্রাহকদের একটি নিখুঁত কেনাকাটা অভিজ্ঞতা প্রদানে গর্ব করে।</p>
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