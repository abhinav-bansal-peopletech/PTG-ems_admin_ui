import React from 'react'
import FileActivityCahrtComponent from '../../Components/DashboardComponent/FileActivityCahrtComponent'
import HeaderComponent from '../../Components/DashboardComponent/HeaderComponent'
import SideMenuComponent from '../../Components/DashboardComponent/SideMenuComponent'
import FilesTableComponent from '../../Components/FilesComponent/FilesTableComponent'
import './Files.css'

export default function Files() {
    return (
        <>
            <header><HeaderComponent/></header>
            <nav><SideMenuComponent/></nav>
            <div className="FChart">
                <FileActivityCahrtComponent/>
            </div>
            <div className="Ftable">
                <FilesTableComponent/>
            </div>
        </>
    )
}
