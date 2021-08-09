import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItemComponent(props) {
    const {name, logo, to} = props

    return (
        <>
            <li> 
                <Link exact="true" to={to} className="nav-link px-3">  
                    <span className="me-2">{logo}</span>
                    <span>{name}</span>
                </Link>
            </li>

        </>
    )
}
