import React from 'react'
import ApplicationActivityChart from '../../Components/DashboardComponent/ApplicationActivityChartComponent'
import SideMenuComponent from '../../Components/DashboardComponent/SideMenuComponent'
import HeaderComponent from '../../Components/DashboardComponent/HeaderComponent'
import ApplicationTable from '../../Components/ApplicationComponent/ApplicationTable'
import './Applications.css'

export default function Applications() {
    return (
        <>
            <header><HeaderComponent/></header>
            <nav><SideMenuComponent/></nav>
            <div className="AChart">
                <ApplicationActivityChart/>
            </div>
            <div className="Atable">
                <ApplicationTable/>
            </div>
        </>
    )
}
