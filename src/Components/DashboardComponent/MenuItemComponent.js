import React from 'react'

export default function MenuItemComponent(props) {
    const {name, logo, onClick} = props
    return (
        <>
            <li onClick={props.onClick} className="menu-item">   
                    <div className="menu-icon">
                        {logo}
                    </div>
                    <span>{name}</span>
            </li>

        </>
    )
}
