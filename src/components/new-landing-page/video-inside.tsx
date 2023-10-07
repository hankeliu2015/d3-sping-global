'use client'
import { useEffect } from "react"

export default function VideoInside() {
  useEffect(() => {
    const vid = document.getElementById('my-vid')! as HTMLVideoElement
    vid.play()
  }, [])

  return (
    <svg version="1.1" className="center-block" xmlns="http://www.w3.org/2000/svg" width="800" height="600" style={{ border: '1px solid black' }}>
      <g>
          <g transform="translate(151,104) scale(1,1)">
              <foreignObject x="-151" y="-104" width="500" height="400" style={{}}>
                <video 
                  id="my-vid"
                  width="200"
                  height="200"
                  style={{ objectFit: 'cover', borderRadius: 100 }} 
                  src="square-sample.mp4"
                  muted
                />
              </foreignObject>
          </g>
      </g>
  </svg>
  )
}