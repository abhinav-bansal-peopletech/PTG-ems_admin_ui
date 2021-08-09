import React from 'react'
import ScreenshotComponent from '../../Components/ScreenshotComponent/ScreenshotComponent'

export default function Screenshots() {
    return (
        <>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                        <h6>Dashboard/Screenshots</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                        <div className="card h-100">
                            <div className="card-header">
                            <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                                Screenshots
                            </div>
                            <div className="card-body">
                                <ScreenshotComponent/>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
            </main> 
        </>
    )
}
