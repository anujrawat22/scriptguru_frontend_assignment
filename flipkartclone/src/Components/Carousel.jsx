    import { useEffect, useState } from "react"

    const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7258d330df72ecde.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/977fcd33f4fd525f.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/130e6d3778bc7a11.jpeg?q=20"
    ]


    const Carousel = () => {
        const [imageIndex, setImageIndex] = useState(0)

        const handlePreviousImg = () => {
            if (imageIndex !== 0) {
                setImageIndex(imageIndex - 1);
            } else {
                setImageIndex(images.length - 1)
            }

        };

        const handleNextImg = () => {
            if (imageIndex < images.length - 1) {
                setImageIndex(imageIndex + 1);
            } else {
                setImageIndex(0)
            }
        };

        useEffect(() => {
            const intervalId = setInterval(() => {
                handleNextImg();
            }, 2000);

            return () => clearInterval(intervalId); // Cleanup interval on component unmount

        }, [imageIndex, handleNextImg]);

        return (
            <div className="px-6 z-0">
                <div className="h-46 relative">
                    <img src={images[imageIndex]} alt="carouselImg" className="w-full h-full" />
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePreviousImg}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextImg}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        )
    }

    export default Carousel