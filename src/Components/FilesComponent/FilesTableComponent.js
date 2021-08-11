import React from 'react'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function FilesTableComponent(props) {
    const [filesData, setFilesData] = useState([])
    const apiGet = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/files-data", {params: request }).then((response) => {
            console.log(response.data.data.fileData)
            setFilesData(response.data.data.fileData)
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
                                        <th>Files</th>
                                        <th>Action</th>
                                        <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {filesData.map((item, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{item.files}</td>
                                                            <td>{item.action}</td>
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
