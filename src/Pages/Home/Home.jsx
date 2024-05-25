import PhotoSwp from "../About/AboutComponent/PhotoSwp";
import ContactCard from "../Contact/ContactCard";
import BestSelling from "./HomeComponent/BestSelling";
import BookVideo from "./HomeComponent/BookVideo";
import HomeFaq from "./HomeComponent/HomeFaq";
import ImageHover from "./HomeComponent/ImageHover";
import Mar from "./HomeComponent/Mar";
import Par from "./HomeComponent/Par";
// import TransitionImage from "./HomeComponent/TransitionImage";


const Home = () => {
    return (
        <div>
        <div>
            <BookVideo/>
        </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <PhotoSwp/>
            </div>

            <Par />
            <div data-aos="zoom-out" data-aos-duration="1000" className="e">
                <BestSelling />
            </div>
            <Mar />
            <HomeFaq />
            <ImageHover />

            <div data-aos="zoom-in">
                <ContactCard />
            </div>
        </div>
    );
};

export default Home;