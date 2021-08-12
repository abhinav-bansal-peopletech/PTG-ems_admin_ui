import React from 'react'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function ApplicationTable(props) {
    const [sessionData, setSessionData] = useState([])
    const apiGet = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/session-data", {params: request } ).then((response) => {
            console.log(response.data.data.sessionData)
            setSessionData(response.data.data.sessionData)
        })
    }
    useEffect(() => {
        console.log("Done")
        apiGet();
    }, []);
    return (
        <>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    id="example"
                                    className="table table-striped data-table"
                                    style={{width: "100%"}}
                                >
                                    <thead>
                                        <tr>
                                        <th>Status</th>
                                        <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {sessionData.map((item, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{item.status}</td>
                                                            <td>{item.timeStamp}</td>
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
