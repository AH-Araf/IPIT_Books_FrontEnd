import Title from "../../../ReuseableComponents/Title";
import ipit from "../../../assets/Partnership/ipit.png"
import ict from "../../../assets/Partnership/ict.png"
import { Link } from "react-router-dom";

const Partnership = () => {
    return (
        <div className=" pb-5 pt-1  mt-20">
            <Title a="বিজনেস পার্টনার"/>

            <div className="flex justify-center gap-20 mt-10">
                <Link target="_blank" to='https://ipitinstitute.com/'>
                    <div data-aos="fade-right" data-aos-duration="2000" className=" flex flex-col justify-center items-center">
                        <img className="hover:bg-slate-100 w-36 h-36 rounded-full e p-4" src={ipit} alt="" />
                        <p className="mt-3 font-bold">IPIT Institute</p>
                    </div>
                </Link>
                
                <Link target="_blank" to='https://www.ictexpertbd.com/'>
                    <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col justify-center items-center">
                        <img className="hover:bg-slate-100 w-36 h-36 rounded-full e p-4" src={ict} alt="" />
                        <p className="mt-3 font-bold">ICT Expert</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Partnership;