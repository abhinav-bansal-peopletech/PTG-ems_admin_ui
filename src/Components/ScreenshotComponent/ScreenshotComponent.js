import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function ScreenshotComponent() {
    const [screenShotData, setScreenShotData] = useState([])
    const GetScreenShotData = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/screenshot-data", {params: request } ).then((response) => {
            console.log(response.data.data)
            setScreenShotData(response.data.data)
        })
    }
    useEffect(() => {
        console.log("Done")
        GetScreenShotData();
    }, []);
    return (
        <>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
                        <div className="card-body">
                            <Carousel>
                                {screenShotData.map((item, index) => {
                                            return(
                                                <div key={index}>
                                                    <img src={item.screenshot} alt="..." />
                                                    <p className="legend">{item.timeStamp}</p>
                                                </div>
                                                )
                                            })}    
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

