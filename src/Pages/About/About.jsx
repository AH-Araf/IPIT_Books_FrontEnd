import TransitionImage from "../Home/HomeComponent/TransitionImage";
import AboutCar from "./AboutComponent/AboutCar";
import AboutSwp from "./AboutComponent/AboutSwp";
import CountUpAnimation from "./AboutComponent/CountUpAnimation";
import Partnership from "./AboutComponent/Partnership";
// import PhotoSwp from "./AboutComponent/PhotoSwp";


const About = () => {
    return (
        <div>
            {/* <CountUpAnimation/> */}
            <AboutCar/>
            <TransitionImage/>
            <Partnership/>
            {/* <PhotoSwp/> */}
            <AboutSwp />
        </div>
    );
};

export default About;