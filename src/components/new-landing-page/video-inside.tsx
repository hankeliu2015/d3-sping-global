export default function VideoInside() {
  
  return (
    <svg version="1.1" className="center-block" xmlns="http://www.w3.org/2000/svg" width="800" height="600" style={{ border: '1px solid black' }}>
      <g>
          <g transform="translate(151,104) scale(1,1)">
              <rect x="0" y="0" width="300" height="200"></rect>
              <foreignObject x="-151" y="-104" width="500" height="400">
                  <video width="300" height="200" style={{ position: 'fixed', left: '151px', top: '104px' }} autoPlay src="http://techslides.com/demos/sample-videos/small.mp4">
                      {/* <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" /> */}
                  </video>
              </foreignObject>
          </g>
      </g>
  </svg>
  )
}