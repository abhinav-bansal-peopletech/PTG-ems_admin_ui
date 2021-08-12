import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'
import './CSS/TagCloud.css'

export default function TagCloudComponent() {
    const [chartData, setChartData] = useState([])

    const getTagCloudData = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/websites-data", {params: request }).then((response) => {
            var tagcloudData = []
            var index;
            for (index in response.data.data.websiteCountData) {
                var websiteData = { value: response.data.data.websiteCountData[index].website, count: response.data.data.websiteCountData[index].count }
                tagcloudData.push(websiteData);
            }
            setChartData(tagcloudData)
        })     
    }

    useEffect(() => {
        getTagCloudData();
    }, [])

    return (
        <>
            <div>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={chartData}
                    className="simple-cloud"
                    onClick={tag => alert(`'${tag.value}' Count: ${tag.count}`)}
                />
            </div>    
        </>
    )
}
