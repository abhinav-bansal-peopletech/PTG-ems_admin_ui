import React from 'react'

export default function ProfileComponent() {
    return (
        <>
            <div className="card bg-info">
                <div className="card-header text-center">
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className="card-body">
                    <h6 className="card-title text-center">User Profile</h6>
                    <ul>
                        <li>IP Address</li>
                        <li>Machine Name</li>
                        <li>Status</li>
                        <li>MAC Address</li>
                        <li>Registered Owner</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
