/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Title from '../../../ReuseableComponents/Title';
import ci from '../../../assets/Image/a.png';
import CountUp from 'react-countup';
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CompanyImage.css';

const CompanyImage = () => {
    const stats = [
        { value: 30000, label: 'Books', color: '#3e98c7' },
        { value: 10000, label: 'Customers', color: '#ff6384' },
        { value: 12000, label: 'Transactions', color: '#9932CC' },
        { value: 1200, label: 'Shops', color: '#ff9f40' },
        { value: 30000, label: 'Feedback', color: 'red' }
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div  ref={sectionRef} className='mt-28 flex flex-col justify-center items-center'>
            <Title a="Our Facilities" />
            <div className='lg:flex flex-wrap justify-center gap-20 mt-10'>
                <div className='w-full  text-2xl p-bar  gap-20'>
                    {stats.map((stat, index) => (
                        <div data-aos="fade-up" data-aos-duration="3000" key={index} className='flex flex-col items-center'>
                            <AnimatedProgressBar
                                value={stat.value}
                                label={stat.label}
                                color={stat.color}
                                isVisible={isVisible}
                            />
                        </div>
                    ))}
                </div>

                {/* <div className="overlay-container flex justify-center mt-14">
                    <img src={ci} alt="" className="company-image rounded-xl w-96 h-96" />
                    <div className="overlay flex flex-col p-4">
                        <div className="overlay-text font-serif"><u>We Served Our Best</u></div>
                        <p className='text-justify font-serif text-sm'>IPIT Books is a premier online destination for book enthusiasts, offering a curated collection of literature across various genres. As a book selling website, IPIT Books prides itself on providing customers with a seamless shopping experience.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

const AnimatedProgressBar = ({ value, label, color, isVisible }) => {
    const [progress, setProgress] = useState(0);

    const { number } = useSpring({
        from: { number: 0 },
        number: isVisible ? value : 0,
        delay: 200,
        config: { duration: 2000 },
        onRest: () => setProgress(isVisible ? value : 0)
    });

    useEffect(() => {
        if (!isVisible) {
            setProgress(0);
        }
    }, [isVisible, value]);

    return (
        <div style={{ width: 120, height: 120, position: 'relative' }}>
            <CircularProgressbar
                value={progress}
                maxValue={value}
                styles={buildStyles({
                    pathColor: color,
                    textColor: color,
                    trailColor: '#d6d6d6',
                    backgroundColor: '#f88',
                })}
            />
            <div className="progress-number" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '20px',
                color: color,
            }}>
                <CountUp start={0} end={progress} duration={2}>
                    {({ countUpRef }) => (
                        <span ref={countUpRef} />
                    )}
                </CountUp>
                <span>+</span>
            </div>
            <p className='mt-2 text-center font-semibold' style={{ color: color }}>{label}</p>
        </div>
    );
};

export default CompanyImage;
