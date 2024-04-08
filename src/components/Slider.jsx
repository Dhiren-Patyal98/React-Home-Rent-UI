

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="\src\assets\slider\data1\images\pexelsphoto186077.jpg" alt="House Rental System" />
        <p className="legend">House Rental System</p>
      </div>
      <div>
        <img src="\src\assets\slider\data1\images\house03.jpg" alt="Luxury Houses for Rent" />
        <p className="legend">Luxury Houses for Rent</p>
      </div>
      <div>
        <img src="\src\assets\slider\data1\images\39f6e0639465c7e01eaa79e26ada2a48.jpg" alt="Rent Houses at Affordable Price" />
        <p className="legend">Rent Houses at Affordable Price</p>
      </div>
    </Carousel>
  );
}

export default Slider;



        
        
        
