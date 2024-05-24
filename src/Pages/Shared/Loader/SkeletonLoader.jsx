

const SkeletonLoader = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col a p-4 rounded-lg gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                    <div className="skeleton h-4 w-44"></div>
                    <div className="skeleton h-4 w-20"></div>
                </div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
