import React from 'react'
import ScreenshotComponent from '../../Components/ScreenshotComponent/ScreenshotComponent'
import HeaderComponent from '../../Components/DashboardComponent/HeaderComponent'
import SideMenuComponent from '../../Components/DashboardComponent/SideMenuComponent'
import './Screenshots.css'

export default function Screenshots() {
    return (
        <>
            <header><HeaderComponent/></header>
            <nav><SideMenuComponent/></nav>
            <div className="Screen">
                <ScreenshotComponent/>
            </div> 
        </>
    )
}
