import img1 from "../../../assets/AboutImage/p1.png"
import img2 from "../../../assets/AboutImage/l1.jpg"
import img3 from "../../../assets/AboutImage/p2.jpg"
import img4 from "../../../assets/AboutImage/p3.jpg"
import img5 from "../../../assets/AboutImage/l2.jpg"
import img6 from "../../../assets/AboutImage/p4.jpg"
import AboutSwp from "./AboutSwp"
import Title from "../../../ReuseableComponents/Title"


const ImageGallery = () => {


    return (
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <div className="grid-container">
                    <div data-aos-duration="2000" data-aos="fade-down" className="grid-item e item1"><img src={img4} alt="" /></div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="grid-item e item2"><img src={img2} alt="" /></div>
                    <div data-aos-duration="2000" data-aos="fade-right" className="grid-item e item3"><img src={img3} alt="" /></div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="grid-item e item4"><img src={img1} alt="" /></div>
                    <div data-aos-duration="2000" data-aos="fade-up" className="grid-item e item4"><img src={img5} alt="" /></div>
                    <div data-aos-duration="2000" data-aos="fade-up" className="grid-item e item5"><img src={img6} alt="" /></div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-1/2">
                <Title a="ইমেজ গ্যালারি" />
                <small className="w-96 text-justify  font-serif">ইত্যাদি শপ একটি প্রাধান্যমূলক অনলাইন গন্তব্য বই প্রেমীদের জন্য, বিভিন্ন জাতের সাহিত্যের একটি পরিচালিত সংগ্রহ অনুষ্ঠিত করে। একটি বই বিক্রয় ওয়েবসাইট হিসাবে, ইত্যাদি শপ গ্রাহকদের একটি নিখুঁত কেনাকাটা অভিজ্ঞতা প্রদানে গর্ব করে।</small>
                <AboutSwp />
            </div>
        </div>

    );
};

export default ImageGallery;