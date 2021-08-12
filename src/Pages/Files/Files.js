import React from 'react'
import FileActivityCahrtComponent from '../../Components/DashboardComponent/FileActivityCahrtComponent'
import FilesTableComponent from '../../Components/FilesComponent/FilesTableComponent'

export default function Files() {
    return (
        <>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <h6>Dashboard/Files</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                    <div className="card h-100">
                        <div className="card-header">
                        <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                        File Activity Chart
                        </div>
                        <div className="card-body">
                            <FileActivityCahrtComponent/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                    <div className="card h-100">
                        <div className="card-header">
                        <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                        Data Table
                        </div>
                        <div className="card-body">
                            <FilesTableComponent/>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}
