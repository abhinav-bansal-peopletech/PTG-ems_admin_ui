import React from 'react'
import {Table} from 'react-bootstrap'

export default function NetworkTableComponent() {
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Website</th>
                    <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>www.google.com</td>
                    <td>2021-07-19T20:15:00+05:30</td>
                    </tr>
                    <tr>
                    <td>www.facebook.com</td>
                    <td>2021-07-19T20:15:00+05:30</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
