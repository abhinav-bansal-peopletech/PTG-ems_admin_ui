import React from 'react'
import { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'

export default function EmployeeListComponent(props) {
    const apiUrl = "http://127.0.0.1:5000/api/get-users-list"
    const [userData, setData] = useState([])

    const apiGet = () => {
        Axios.get(apiUrl).then((response) => {
            setData(response.data.data)
        })
    }
    useEffect(() => {
        apiGet();
    }, []);
    
    return (
        <>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="card-header">
                 <span><i className="bi bi-table me-2"></i></span> Data Table
                    </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    id="example"
                                    className="table table-striped data-table"
                                    style={{width: "100%"}}>
                                        <thead>
                                            <tr>
                                            <th>User ID</th>
                                            <th>Machine Name</th>
                                            <th>Registered Owner</th>
                                            <th>Public IP</th>
                                            <th>MAC Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>  
                                                {userData.map((item, index) => {
                                                    return(
                                                        <tr key={item.userId}>
                                                        <td><Link exact="true" to="/dashboard">{item.userId}</Link></td>
                                                        <td>{item.machineName}</td>
                                                        <td>{item.registeredOwner}</td>
                                                        <td>{item.publicIP}</td>
                                                        <td>{item.macAddr}</td>
                                                    </tr> 
                                                    )
                                                })}                                  
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                      
        </>
    )
}



