const CardMenu = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <div className="w-48 h-48 bg-white shadow-lg rounded-lg
                p-4">
                <h3 className="text-xl font-bold mb-2">
                    Budget Tracker
                </h3>
                <p className="text-gray-600 ">
                    Card content goes here
                </p>
            </div>
            <div className="w-48 h-48 bg-white shadow-lg rounded-lg
                p-4">
                <h3 className="text-xl font-bold mb-2">
                    TODOs
                </h3>
                <p className="text-gray-600 ">
                    Card content goes here
                </p>
            </div>
            <div className="w-48 h-48 bg-white shadow-lg rounded-lg
                p-4">
                <h3 className="text-xl font-bold mb-2">
                    Shopping List
                </h3>
                <p className="text-gray-600 ">
                    Card content goes here
                </p>
            </div>
        </div>
    );
};

export default CardMenu;