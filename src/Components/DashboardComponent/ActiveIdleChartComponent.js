import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Card} from 'react-bootstrap'

export default function ActiveIdleChart() {

const data = {
  labels: ['Idle Time', 'Productive Time'],
  datasets: [
    {
      label: 'Total',
      data: [12, 19],
      backgroundColor: [
        'rgb(239, 26, 29)',
        'rgb(35, 39, 229)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options ={
    maintainAspectRatio: false,
}

    return (
        <>
            <Card className="AICard justify-content-center">
                <Doughnut data={data} options={options} />
            </Card>
        </>
    )
}
