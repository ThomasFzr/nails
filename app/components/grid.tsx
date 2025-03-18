import { useState } from "react";

const images = [
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

export const Grid = () => {

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-8 pt-20 md:p-20">
                {images.map((image, index) => {
                    return (
                        <div className="overflow-hidden rounded-lg shadow-lg">

                            <img
                                key={index}
                                src={image}
                                alt={`Design ${index + 1}`}
                                className="object-cover w-300 rounded-lg shadow-lg hover:scale-110 duration-500 ease-in-out transition-transform"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
