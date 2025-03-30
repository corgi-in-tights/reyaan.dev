import React, { useRef, useState, useEffect } from "react";

const image = new URL('../assets/corgi.png?width=100&height=100', import.meta.url);

function NavDesign() {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (imgRef.current) {
                const rect = imgRef.current.getBoundingClientRect();
                const imgCenterX = rect.left + rect.width / 2;
                const imgCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(event.clientY - imgCenterY, event.clientX - imgCenterX) * (180 / Math.PI);
                setRotation(angle);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="flex justify-center items-center">
            <img
            ref={imgRef}
            src={image.toString()}
            className="transform transition-transform duration-100"
            style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
            alt="corgi"
            />
        </div>
    );
};

export default NavDesign;
