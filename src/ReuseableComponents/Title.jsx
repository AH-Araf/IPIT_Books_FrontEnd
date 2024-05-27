/* eslint-disable react/prop-types */
const Title = ({ a, b }) => {
    return (
        <div className="w-full">
            <h1 className={`text-center font-serif my-4 mt-10 font-bold lg:text-3xl ${b === 'red' ? 'text-black' : 'text-black'}`}>
                <span className={` w-full ${b === 'red' ? 'bg-white' : 'bg-white'}  px-4`}>{a}</span>
            </h1>
        </div>
    );
};

export default Title;
