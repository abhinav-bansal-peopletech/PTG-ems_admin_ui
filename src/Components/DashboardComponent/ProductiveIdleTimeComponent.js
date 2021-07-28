import React from 'react'
import './CSS/PITime.css'
import ActiveIdleChartComponent from './ActiveIdleChartComponent'

export default function ProductiveIdleTimeComponent() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Productive Time</h5>
                        <p className="card-text">{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Idle Time</h5>
                        <p className="card-text">{new Date().toLocaleTimeString([], {hour: '2-digit', minute: "2-digit"})}</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <ActiveIdleChartComponent/>   
                </div>
            </div>
        </>
    )
}
