import React from 'react'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png' 

export default function ScreenshotComponent() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</h5>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
