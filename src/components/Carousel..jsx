import { React } from "react";
import 'rsuite/dist/rsuite.min.css';

import { Carousel } from "rsuite";



const SimpleCarousel = () => {
    return (
        <Carousel className="custom-slider">
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
        </Carousel>
    )
}

export default SimpleCarousel;