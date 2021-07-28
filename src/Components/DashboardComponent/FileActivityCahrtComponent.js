import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import './CSS/Chart.css'

export default function FileActivityChart() {
    return (
        <>
                    <Card className="card justify-content-center chartCard">
                        <Bar
                                data={{
                                    labels: ['Create', 'Delete', 'Open', 'Modify', 'print Job', 'Devices'],
                                    datasets: [{
                                        label: 'Total Count',
                                        data: [12, 19, 3, 5, 2, 3], 
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                        ],
                                        borderWidth: 1,
                                        
                                    }]
                                }}
                                height={400}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        y: 
                                            {
                                                display: true,
                                                title: {
                                                display: true,
                                                text: 'Count',
                                                color: '#191',
                                                font: {
                                                    family: 'Times',
                                                    size: 20,
                                                    style: 'normal',
                                                    lineHeight: 1.2
                                                }},
                                                ticks: {
                                                    beginAtZero: true,
                                                }
                                            },
                                            x: 
                                            {
                                                display: true,
                                                title: {
                                                display: true,
                                                text: 'Activity',
                                                color: '#191',
                                                font: {
                                                    family: 'Times',
                                                    size: 20,
                                                    style: 'normal',
                                                    lineHeight: 1.2
                                                }},
                                                ticks: {
                                                    beginAtZero: true,
                                                }
                                            },
                                    }
                                }}
                            />
                    </Card>
        </>
    )
}

