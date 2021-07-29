import React from 'react'
import SideMenuComponent from '../../Components/DashboardComponent/SideMenuComponent'
import HeaderComponent from '../../Components/DashboardComponent/HeaderComponent'
import NetworkTableComponent from '../../Components/NetworkComponent/NetworkTableComponent'
import TagCloudComponent from '../../Components/DashboardComponent/TagCloudComponent'
import './Network.css'

export default function Network() {
    return (
        <>
            <header><HeaderComponent/></header>
            <nav><SideMenuComponent/></nav>
            <div className="TCloud">
                <TagCloudComponent/>
            </div>
            <div className="TCtable">
                <NetworkTableComponent/>
            </div>
        </>
    )
}
