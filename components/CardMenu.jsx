import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CardMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnHover = () => {
        setIsHovered(false);
    };

    return (
        <div className="flex justify-center items-center space-x-4">
            <div className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4">
                <Link href="/budget">
                    <h3 className="text-xl font-bold mb-2">
                        Budget Tracker
                    </h3>
                </Link>
                <div
                    className="relative w-40 h-40"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnHover}
                >
                    <Image
                        src={isHovered ? '/assets/images/piggybank_animated.gif' : '/assets/images/piggybank_still.gif'}
                        alt="Piggybank"
                        className="w-full h-full"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <div className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4">
                <Link href="/todo">
                    <h3 className="text-xl font-bold mb-2">
                        TODOs
                    </h3>
                </Link>
                <p className="text-gray-600 ">
                    Card content goes here
                </p>
            </div>
            <div className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4">
                <Link href="/shoplist">
                    <h3 className="text-xl font-bold mb-2">
                        Shopping List
                    </h3>
                </Link>
                <p className="text-gray-600 ">
                    Card content goes here
                </p>
            </div>
        </div>
    );
};

export default CardMenu;