import React from 'react'
import ApplicationActivityChart from '../DashboardComponent/ApplicationActivityChartComponent'
import './CSS/ApplicationChart.css'

export default function ApplicationChart() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-1 g-12">
                <div className="col-sm-12">
                    <div className="card">
                    <div className="card-body">
                        <ApplicationActivityChart/>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )
}
