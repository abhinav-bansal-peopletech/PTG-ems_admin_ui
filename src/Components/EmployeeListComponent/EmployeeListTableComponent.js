import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Axios from "axios"

export default function EmployeeListComponent(props) {
    const apiUrl = "http://127.0.0.1:5000/api/get-users-list"
    const [userData, setData] = useState([])

    const apiGet = () => {
        Axios.get(apiUrl).then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
        })
    }
    useEffect(() => {
        apiGet();
    }, []);
    
    return (
        <>
            <div className="mt-5 ml-3 row justify-content-center tableStyle">
                <Container>
                    <Table striped bordered hover className='table-responsive table-fixed table'>
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
                                        <td>{item.userId}</td>
                                        <td>{item.machineName}</td>
                                        <td>{item.registeredOwner}</td>
                                        <td>{item.publicIP}</td>
                                        <td>{item.macAddr}</td>
                                    </tr> 
                                    )
                                })}                                  
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}



