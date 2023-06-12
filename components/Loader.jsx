import { ImSpinner2 } from 'react-icons/im';

const Loader = () => {
    return (
        <div className="flex flex-col items-center 
        justify-between gap-4 mx-4 my-4">
            <ImSpinner2
                size={50}
                className="object-contain animate-spin
                fill-blue-300"
            />
            <p>Loading...</p>
        </div>
    );
};

export default Loader;