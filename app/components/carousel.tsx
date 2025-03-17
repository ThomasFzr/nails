import { useState } from "react";

const slides = [
    "/images/designs/nailsdesings-1.jpg",
    "/images/designs/nailsdesings-2.jpg",
    "/images/designs/nailsdesings-3.jpg",
    "/images/designs/nailsdesings-4.jpg",
    "/images/designs/nailsdesings-5.jpg",
    "/images/designs/nailsdesings-6.jpg",
    "/images/designs/nailsdesings-7.jpg",
    "/images/designs/nailsdesings-8.jpg",
    "/images/designs/nailsdesings-9.jpg",
    "/images/designs/nailsdesings-10.jpg",
    "/images/designs/nailsdesings-11.jpg",
];

export const Carousel = () => {
    const [active, setActive] = useState(3);

    const nextSlide = () => {
        setActive((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    };

    return (
        <div className="relative w-[50%] h-[370px] flex justify-center items-center overflow-hidden">
            {slides.map((slide, index) => {
                const offset = index - active;
                const scale = 1 - Math.abs(offset) * 0.2;
                const blur = Math.abs(offset) > 2 ? "blur-sm opacity-0" : "blur-none opacity-60";

                return (
                    <div className="overflow-hidden w-[300px]">
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className={`absolute w-[300px] h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 ${blur}`}
                            style={{
                                transform: `translateX(${120 * offset}px) scale(${scale})`,
                                zIndex: -Math.abs(offset),
                            }}
                        />
                    </div>
                );
            })}

            <button
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-4xl font-bold text-black px-4 py-2 rounded-full"
                onClick={prevSlide}
            >
                &#8249;
            </button>
            <button
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-4xl font-bold text-black px-4 py-2 rounded-full"
                onClick={nextSlide}
            >
                &#8250;
            </button>
        </div>
    );
};
