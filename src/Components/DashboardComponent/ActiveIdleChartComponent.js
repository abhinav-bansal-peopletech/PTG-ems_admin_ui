import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

export default function ActiveIdleChart() {

  const [chartData, setChartData] = useState({})

    const GetActiveIdleChartData = () => {
        let empData = []
        const request = JSON.stringify({date:"08/07/2021"})

        ApiManager.get("user-report/6/session-data", {params: request }).then((response) => {
            empData.push(response.data.data.idleHoursCountData)
            empData.push(response.data.data.activeHoursCountData)
            setChartData({
                labels: ['Idle Time', 'Productive Time'],
                datasets: [
                  {
                    label: 'Total',
                    data: empData,
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
            })})
    }

    useEffect(() => {
        GetActiveIdleChartData();
    }, [])

const options ={
    maintainAspectRatio: false,
}

    return (
        <>
          <div>
                <Doughnut data={chartData} options={options} />
          </div>
        </>
    )
}
