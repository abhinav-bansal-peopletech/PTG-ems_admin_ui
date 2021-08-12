import React from 'react'
import MenuItemComponent from './MenuItemComponent'

    const itemList = [
        {
            text: 'Dashboard',
            logo:  <i className="bi bi-speedometer2"></i>,
            to: '/dashboard'
        },
        {
            text: 'Applications',
            logo: <i className="bi bi-app-indicator"></i>,
            to: '/applications'
        },
        {
            text: 'Screenshots',
            logo: <i className="bi bi-fullscreen"></i>,
            to: '/screenshots'
        },
        {
            text: 'Network',
            logo: <i className="bi bi-cloud"></i>,
            to: '/network'
        },
        {
            text: 'Files',
            logo: <i className="bi bi-file-earmark"></i>,
            to: '/files'
        },
        {
            text: 'Session',
            logo: <i className="bi bi-binoculars"></i>,
            to: '/session'
        }
    ]

export default function SideMenuComponent() {

    return (
        <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex="-1"
        id="sidebar"
        >
        <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
            <ul className="navbar-nav">
                      {itemList.map((item, index) => (
                        <MenuItemComponent
                            key={index}
                            name = {item.text}
                            logo = {item.logo}
                            to = {item.to}
                        />
                    ))}                
                  </ul>
            </nav>
        </div>
        </div>
    )

}