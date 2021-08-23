import React from 'react'
import {Line} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'
import './CSS/Chart.css'

export default function ApplicationActivityChart() {
    const [chartData, setChartData] = useState({})

    const GetApplicationActivityChartData = () => {
        let empData = []
        const request = JSON.stringify({date:"08/07/2021"})

        ApiManager.get("user-report/6/application-data", {params: request }).then((response) => {
            empData = response.data.data.applicationCountData
            setChartData({
                labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', 
            '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
            '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00' ],
                        datasets: [{
                            label: 'Total',
                            data: empData,
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        }],
            })})
    }

    useEffect(() => {
        GetApplicationActivityChartData();
    }, [])

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
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
                text: 'Time',
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
            }
            }
    }
    return (
        <>
                <Card className="chartCard">
                    <Line 
                        data={chartData}
                        height={400}
                        options={options}
                    />
                </Card>
        </>
    )
    }
