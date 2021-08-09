import React from 'react'

export default function ApplicationTable() {
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
                                        <tr>
                                        <td>Microsoft Teams</td>
                                        <td>2021-07-19T20:15:00+05:30</td>
                                        <td>2021-07-19T20:15:00+05:30</td>
                                        </tr>
                                        <tr>
                                        <td>Chrome</td>
                                        <td>2021-07-19T20:15:00+05:30</td>
                                        <td>2021-07-19T20:15:00+05:30</td>
                                        </tr>
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
