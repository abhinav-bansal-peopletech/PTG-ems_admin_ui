import React from 'react'
import {Carousel} from 'react-bootstrap'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png' 

export default function ScreenshotComponent() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
