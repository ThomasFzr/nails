import { useState, useEffect } from "react";

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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-8 pt-20 md:p-20">
                {images.map((image, index) => (
                    <div
                        className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        key={index}
                    >
                        <img
                            src={image}
                            alt={`Design ongles ${index + 1}`}
                            className="object-cover w-full h-full rounded-lg shadow-lg hover:scale-110 duration-500 ease-in-out transition-transform"
                            onClick={() => setSelectedImage(image)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full backdrop-blur-2xl bg-opacity-50 flex justify-center items-center z-500"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Zoomed design ongles"
                            className="object-cover w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
