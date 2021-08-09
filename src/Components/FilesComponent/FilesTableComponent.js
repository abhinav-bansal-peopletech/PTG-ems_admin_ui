import React from 'react'

export default function FilesTableComponent() {
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
                                        <th>Files</th>
                                        <th>Action</th>
                                        <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>xyz.txt</td>
                                        <td>Open</td>
                                        <td>2021-07-19T20:15:00+05:30</td>
                                        </tr>
                                        <tr>
                                        <td>xyz.txt</td>
                                        <td>Closed</td>
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
