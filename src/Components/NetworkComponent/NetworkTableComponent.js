import React from 'react'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function NetworkTableComponent() {
    const [networkData, setNetworkData] = useState([])
    const GetNetworkData = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/websites-data", {params: request }).then((response) => {
            console.log(response.data.data.websiteData)
            setNetworkData(response.data.data.websiteData)
        })
    }
    useEffect(() => {
        console.log("Done")
        GetNetworkData();
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
                                        <th>Website</th>
                                        <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {networkData.map((item, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{item.website}</td>
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
