

const BookLoader = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col gap-4 w-96 a p-3 rounded-lg">
                <div className="skeleton h-52 w-40"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-between">
                    <div className="skeleton h-4 w-64"></div>
                    <div className="skeleton h-4 w-14"></div>
                </div>
            </div>
        </div>
    );
};

export default BookLoader;