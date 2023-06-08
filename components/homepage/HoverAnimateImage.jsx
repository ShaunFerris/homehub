import Image from "next/image";
import { useState } from "react";

const HoverAnimateImage = ({
    staticSrc, animatedSrc, alt, className, width, height
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnHover = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative w-40 h-40"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}
        >
            <Image
                src={isHovered ? animatedSrc : staticSrc}
                alt={alt}
                className={className}
                fill={true}
            />
        </div>
    );
};

export default HoverAnimateImage;