'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ControlledCarousel() {

const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex) => {
setIndex(selectedIndex);
};
return (
<Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', height: '100%' }}>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg" className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg" className="d-block w-100" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg" className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg" className="d-block w-100" alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;