import { Parallax } from "react-parallax";
import image1 from "../../../assets/Book/h.jpg";
import './HomeComponent.css'

const Par = () => {
    return (
        <div className='my-28'>
            <Parallax
                blur={{ min: -50, max: 40 }}
                bgImage={image1}
                bgImageAlt="Img"
                strength={200}
                className="parallax-container"
            >
                <div className="parallax-content">
                    <div className="hero image-height flex items-center justify-center">
                        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
                        <div className="hero-content text-neutral-content z-10 px-4 sm:px-8">
                            <div className="">
                                <h1 className="mb-4 text-2xl sm:text-3xl font-bold uppercase">I T T A D I - S H O P</h1>
                                <p className="mb-2 text-xs sm:text-sm font-normal">
                                    ইত্যাদি শপ হল বই প্রেমীদের জন্য একটি প্রথম শ্রেণীর অনলাইন গন্তব্যস্থল, যা বিভিন্ন ধরণের সাহিত্যের একটি সংগ্রহশালা সরবরাহ করে। একটি বই বিক্রির ওয়েবসাইট হিসাবে, ইত্যাদি শপ গ্রাহকদের একটি নিরবচ্ছিন্ন কেনাকাটার অভিজ্ঞতা প্রদান করে, যেখানে জনপ্রিয় বেস্টসেলার এবং নিস টাইটেলগুলির বিস্তৃত ক্যাটালগ পাওয়া যায়।
                                    প্রযুক্তি এবং উদ্ভাবনের ক্ষেত্রে সুপরিচিত নাম, আইপিআইটি লিমিটেড দ্বারা প্রতিষ্ঠিত এবং পরিচালিত, ইত্যাদি শপ উৎকর্ষতা এবং গ্রাহক সন্তুষ্টির প্রতি প্রতিশ্রুতিবদ্ধ। <span className="hd-text">সাহিত্যের প্রতি গভীর ভালবাসা এবং পাঠের প্রতি ভালোবাসা প্রচারের প্রতিশ্রুতি নিয়ে, ইত্যাদি শপ পাঠকদের চিত্তাকর্ষক গল্প, অন্তর্দৃষ্টিপূর্ণ জ্ঞান, এবং বইয়ের জগতে সমৃদ্ধ অভিজ্ঞতার সাথে সংযোগ করার চেষ্টা করে।
                                        ইত্যাদি শপ এ, গ্রাহকরা বিভিন্ন ধরণের ঘরানা অন্বেষণ করতে পারেন, যার মধ্যে রয়েছে কথাসাহিত্য, অ-কথাসাহিত্য, জীবনী, স্ব-সহায়তা, একাডেমিক টেক্সট এবং আরও অনেক কিছু। ওয়েবসাইটটি সকল বয়স এবং পটভূমির পাঠকদের পছন্দ এবং আগ্রহের প্রতি খেয়াল রেখে ডিজাইন করা হয়েছে, নিশ্চিত করে যে এখানে প্রত্যেকের জন্য কিছু না কিছু রয়েছে।</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Par;
