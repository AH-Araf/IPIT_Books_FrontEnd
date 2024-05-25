import TransitionImage from "../Home/HomeComponent/TransitionImage";
import AboutCar from "./AboutComponent/AboutCar";
import AboutSwp from "./AboutComponent/AboutSwp";
import Partnership from "./AboutComponent/Partnership";
// import PhotoSwp from "./AboutComponent/PhotoSwp";


const About = () => {
    return (
        <div>
        
            <AboutCar/>
            <TransitionImage/>
            <Partnership/>
            {/* <PhotoSwp/> */}
            <AboutSwp />
        </div>
    );
};

export default About;