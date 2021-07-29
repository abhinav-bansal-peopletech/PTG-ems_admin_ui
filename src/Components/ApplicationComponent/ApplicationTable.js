import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ApplicationTable() {
    return (
        <>
            <Table striped bordered hover size="sm">
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
            </Table>
        </>
    )
}
