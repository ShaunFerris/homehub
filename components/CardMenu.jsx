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
                <div
                    className="relative w-40 h-40"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnHover}
                >
                    <Link href="/budget">
                        <h3 className="text-xl font-bold mb-2">
                            Budget Tracker
                        </h3>

                        <Image
                            src={isHovered ?
                                '/assets/images/piggybank_animated.gif' :
                                '/assets/images/piggybank_still.gif'}
                            alt="piggybank"
                            className="w-full h-full pb-5"
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
            <div className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4">
                <div
                    className="relative w-40 h-40"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnHover}
                >
                    <Link href="/todo">
                        <h3 className="text-xl font-bold mb-2">
                            TODO List
                        </h3>

                        <Image
                            src={isHovered ?
                                '/assets/images/todolist_animated.gif' :
                                '/assets/images/todolist_still.gif'}
                            alt="todolist"
                            className="w-full h-full pb-5"
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
            <div className="w-48 h-48 bg-blue-100 shadow-lg rounded-lg
                p-4">
                 <div
                    className="relative w-40 h-40"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnHover}
                >
                    <Link href="/shoplist">
                        <h3 className="text-xl font-bold mb-2">
                            Shopping List
                        </h3>

                        <Image
                            src={isHovered ?
                                '/assets/images/shopping_animated.gif' :
                                '/assets/images/shopping_still.gif'}
                            alt="shoppinglist"
                            className="w-full h-full pb-5"
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardMenu;