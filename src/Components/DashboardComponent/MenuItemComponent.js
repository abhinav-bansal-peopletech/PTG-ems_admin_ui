import React from 'react'

export default function MenuItemComponent(props) {
    const {name, logo} = props
    return (
        <>
            <li>    
                <a href="#one" className="menu-item" >
                        <div className="menu-icon">
                            {logo}
                        </div>
                    <span>{name}</span>
                </a>
            </li>
        </>
    )
}
