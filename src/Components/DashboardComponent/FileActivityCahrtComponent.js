import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'
import './CSS/Chart.css'

export default function FileActivityChart() {
    const [chartData, setChartData] = useState({})

    const GetFileActivityChartData = () => {
        let empData = []
        let activityLabel = [] 
        const request = JSON.stringify({date:"08/07/2021"})

        ApiManager.get("user-report/6/files-data", {params: request }).then((response) => {
            for(const dataObj of response.data.data.fileOperationsCountData)
            {
                activityLabel.push(dataObj.operation)
                empData.push(dataObj.count) 
            }

            console.log(empData)
            console.log(activityLabel)
            setChartData({
                labels: activityLabel,
                        datasets: [{
                            label: 'Total',
                            data: empData,
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
                        }],
            })})
    }

    useEffect(() => {
        GetFileActivityChartData();
    }, [])

    const options={
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
    }
    return (
       
        <>
            <Card className="card justify-content-center chartCard">
                <Bar
                    data={chartData}
                    options={options}
                    height={400}   
                />
            </Card>
        </>
    )
}

