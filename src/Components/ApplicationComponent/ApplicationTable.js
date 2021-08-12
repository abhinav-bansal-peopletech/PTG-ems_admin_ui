import React from 'react'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function ApplicationTable(props) {
    const [applicationData, setApplicationData] = useState([])
    const apiGet = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/application-data", {params: request } ).then((response) => {
            console.log(response.data.data.applicationData)
            setApplicationData(response.data.data.applicationData)
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
                                        <th>Application</th>
                                        <th>Open Time</th>
                                        <th>Close Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {applicationData.map((item, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{item.application}</td>
                                                            <td>{item.openTime}</td>
                                                            <td>{item.closeTime}</td>
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
