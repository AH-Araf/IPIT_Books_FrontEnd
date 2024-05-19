
import BarC from './ChartsForBooks/BarC';
import LineC from './ChartsForBooks/LineC';
import PieC from './ChartsForBooks/PieC';

const Stats = () => {
    return (
        <div>
            <div className='flex h-96 justify-center items-center bg-emerald-50'>
                <PieC />
            </div>
            <div className='flex justify-center items-center '>
                <BarC />
                <LineC />
            </div>
            
        </div>
    );
};

export default Stats;