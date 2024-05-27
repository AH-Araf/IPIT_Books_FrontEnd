import TransitionImage from "../Home/HomeComponent/TransitionImage";
import CompanyImage from "./AboutComponent/CompanyImage";
import FeedBack from "./AboutComponent/FeedBack";
// import AboutCar from "./AboutComponent/AboutCar";
// import AboutSwp from "./AboutComponent/AboutSwp";
// import CountUpAnimation from "./AboutComponent/CountUpAnimation";
import ImageGallery from "./AboutComponent/ImageGallery";
// import PhotoSwp from "./AboutComponent/PhotoSwp";


const About = () => {
    return (
        <div>
            <ImageGallery />
            {/* <CountUpAnimation/> */}
            {/* <AboutCar/> */}
            <div className="mt-20">
                <TransitionImage />
            </div>
           
            {/* <PhotoSwp/> */}
            {/* <AboutSwp /> */}
            <CompanyImage />
            <FeedBack/>
            
        </div>
    );
};

export default About;