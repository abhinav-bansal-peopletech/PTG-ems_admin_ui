import React from 'react'
import FileActivityChart from './FileActivityCahrtComponent'
import ApplicationActivityChart from './ApplicationActivityChartComponent'

export default function MainComponent() {
    return (
        <>
            <div className="container justify-content-center">
                <div className="row rows row-cols-1 row-cols-md-2 g-6" >
                    <div className="col columns1 col-sm-6">
                        <FileActivityChart/>
                    </div>
                    <div className="col columns2 col-sm-6">
                        <ApplicationActivityChart/>
                    </div>
                </div>
            </div>
        </>
    )
}
