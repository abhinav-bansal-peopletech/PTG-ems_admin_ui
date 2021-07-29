import React from 'react'
import {Table} from 'react-bootstrap'

export default function FilesTableComponent() {
    return (
        <>
            <Table striped bordered hover size="sm">
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
            </Table>
        </>
    )
}
