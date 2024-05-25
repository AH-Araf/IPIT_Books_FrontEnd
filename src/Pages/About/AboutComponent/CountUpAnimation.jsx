import CountUp from 'react-countup';

const CountUpAnimation = () => {
    return (
        <div>
            <CountUp start={0} end={10000} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
        </div>
    );
};

export default CountUpAnimation;