import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
        <>
            <Carousel data-bs-theme=""  className='sliderContainer'>
                <Carousel.Item className='sliderImg'>
                    <img
                        className="d-block w-100"
                        src="https://steelsupplements.com/cdn/shop/articles/shutterstock_1401119879_1000x.jpg?v=1632215329"
                        alt="First slide"
                    />   
                </Carousel.Item>
                <Carousel.Item  className='sliderImg'>
                    <img
                        className="d-block w-100"
                        src="https://ifbb-academy.com/wp-content/uploads/2020/05/master-bb.jpg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item  className='sliderImg'>
                    <img
                        className="d-block w-100"
                        src="https://www.crossfit.com/wp-content/uploads/2023/11/13133247/what-is-a-crossfit-workout-1024x576.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item  className='sliderImg'>
                    <img
                        className="d-block w-100"
                        src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_43/3066896/191023-crossfit-ac-1153p.jpg"
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item  className='sliderImg'>
                    <img
                        className="d-block w-100"
                        src="https://images.livemint.com/img/2020/10/29/1140x641/iStock-825534354_1603983898283_1603983921852.jpg"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider