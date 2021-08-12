import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'
import './CSS/TagCloud.css'

export default function TagCloudComponent() {
    const [chartData, setChartData] = useState([])

    const chart = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/websites-data", {params: request }).then((response) => {
            console.log(response.data.data.websiteCountData)
            setChartData(
                response.data.data.websiteCountData
            )})     
    }

    useEffect(() => {
        chart();
    }, [])

    return (
        <>
            <div>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={chartData}
                    className="simple-cloud"
                    onClick={tag => alert(`'${tag.website}' Count: ${tag.count}`)}
                />
            </div>    
        </>
    )
}
