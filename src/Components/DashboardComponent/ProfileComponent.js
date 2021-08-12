import React from 'react'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function ProfileComponent() {
    const [profileData, setProfileData] = useState([])
    const apiGet = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/basic-info", {params: request }).then((response) => {
            console.log(response.data.data)
            setProfileData(response.data.data)
        })
    }
    useEffect(() => {
        console.log("Done")
        apiGet();
    }, []);
    return (
        <>
            <div className="card bg-info">
                <div className="card-header text-center">
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className="card-body">
                    <h6 className="card-title text-center">User Profile</h6>
                    <ul>
                        <li>User Id: {profileData.userId}</li>
                        <li>IP Address: {profileData.publicIP}</li>
                        <li>Machine Name: {profileData.machineName}</li>
                        <li>MAC Address: {profileData.macAddress}</li>
                        <li>Registered Owner: {profileData.registeredOwner}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
