import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'
import './CSS/TagCloud.css'

export default function TagCloudComponent() {
    const [tagCloudData, setTagCloudData] = useState([])

    const GetTagCloudData = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/websites-data", {params: request }).then((response) => {
            console.log(response.data.data.websiteCountData)
            setTagCloudData(
                response.data.data.websiteCountData
            )})     
    }

    useEffect(() => {
        GetTagCloudData();
    }, [])

    return (
        <>
            <div>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={tagCloudData}
                    className="simple-cloud"
                    onClick={tag => alert(`'${tag.website}' Count: ${tag.count}`)}
                />
            </div>    
        </>
    )
}
