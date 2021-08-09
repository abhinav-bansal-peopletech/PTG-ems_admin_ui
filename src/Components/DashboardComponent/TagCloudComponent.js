import React from 'react'
import { TagCloud } from 'react-tagcloud'
import './CSS/TagCloud.css'

const data = [
  { value: 'www.google.com', count: 25 },
  { value: 'www.facebook.com', count: 18 },
  { value: 'www.flipkart.com', count: 38 },
  { value: 'www.amazon.com', count: 30 },
  { value: 'www.geeksforgeeks.org', count: 28 },
  { value: 'www.office.com', count: 25 },
  { value: 'www.tutorialspoint.com', count: 33 },
  { value: 'www.linkedin.com', count: 20 },
  { value: 'www.twitter.com', count: 22 },
  { value: 'www.youtube.com', count: 7 },
  { value: 'www.pinterest.com', count: 25 },
  { value: 'www.instagram.com', count: 15 },
  { value: 'www.reddit.com', count: 17 },
  { value: 'www.flickr.com', count: 27 },
  { value: 'www.snapchat.com', count: 30 },
  { value: 'www.whatsapp.com', count: 15 },
  { value: 'www.quora.com', count: 30 },
  { value: 'www.bizsugar.com', count: 11 },
]

export default function TagCloudComponent() {
    return (
        <>
        <div>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
                className="simple-cloud"
                onClick={tag => alert(`'${tag.value}' Count: ${tag.count}`)}
            />
        </div>    
        </>
    )
}
