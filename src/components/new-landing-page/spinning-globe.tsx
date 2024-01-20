"use client"
import Script from "next/script"
import data from "./geo.json"
import { useEffect } from "react"
import * as d3 from "d3"
// Function to generate random pairs of cities
function getRandomCityPairs(count: number) {
  const pairs = [];
  for (let i = 0; i < count; i++) {
    const city1 = data.features[Math.floor(Math.random() * data.features.length)];
    let city2;
    do {
      city2 = data.features[Math.floor(Math.random() * data.features.length)];
    } while (city1 === city2); // Ensure cities are different
    pairs.push([city1, city2]);
  }
  return pairs;
}

function spinGlobe() {
  // Map configuration
  const width = 620
  const height = 620
  const rScale = d3.scaleSqrt()

  const peoplePerPixel = 40000

  // Configuration for the spinning effect
  const time = Date.now()
  const rotate = [0, 0]
  const velocity = [.0075, -0]

  // set projection type and paremetes
  const projection = d3.geoOrthographic()
    .scale(300)
    .translate([(width / 2), height / 2])
    .clipAngle(90)
    .precision(0.3)

  // create path variable, empty svg element and group container
  const pathConnection = d3.geoPath(projection)
  const path = d3.geoPath(projection)
  const pathAnim = d3.geoPath(projection)

  // TODO: still got warnings type svg and g types.
  const svg: any = d3.select("svg#globe")
  // const svg: d3.Selection<SVGElement, any, any, any> = d3.select("svg#globe")
  const g: any = svg.append("g")
  // const g: d3.Selection<SVGGElement, any, any, any> = svg.append("g")

  // drawing dark grey sphere as landmass
  g.append("path")
    .datum({ type: "Sphere" })
    .attr("class", "sphere")
    .attr("d", d3.geoPath(projection))
    .attr("fill", "#164176")

  // setting the circle size (not radius!) according to the number of inhabitants per city
  const population_array = data.features.map((feature) => feature.properties.population)
  const max_population = population_array.sort(d3.descending)[0]
  const rMin = 0
  const rMax = Math.sqrt(max_population / (peoplePerPixel * Math.PI))
  rScale.domain([0, max_population])
  rScale.range([rMin, rMax])

  path.pointRadius(function (d: any) {
    return d.properties ? rScale(d.properties.population) : 1
  })

  let currentVideo: HTMLVideoElement | null = null; // Variable to store the current video element

  function handleCityClick(city: any, event: any) {
    // Remove the current video (if any)
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.parentElement?.remove();
    }

    // Get the click coordinates relative to the SVG
    const [clickX, clickY] = d3.pointer(svg.node());
    // Define the position where you want to place the video inside the SVG
    const videoX = clickX - 50; // Adjust the X-coordinate as needed
    const videoY = clickY - 50; // Adjust the Y-coordinate as needed

    // Create a new foreignObject for the video
    const foreignObject = svg
      .append("foreignObject")
      .attr("x", videoX) // Adjust the X-coordinate as needed
      .attr("y", videoY) // Adjust the Y-coordinate as needed
      .attr("width", 100)
      .attr("height", 100);

    // Create the video element using native JavaScript
    const video = document.createElement("video");
    video.id = "my-vid";
    video.width = 100;
    video.height = 100;
    video.style.cssText = "object-fit: cover; border-radius: 50px";
    video.muted = true;
    video.src = "../../square-sample.mp4"; // Adjust the path as needed

    // Append the video to the foreignObject
    foreignObject.node()!.appendChild(video);

    // Play the video and set it as the current video
    video.play()
      .then(() => {
        console.log("Video is playing");
        currentVideo = video;
      })
      .catch((error) => {
        console.error("Video playback error:", error);
      });
  }
  function appendVideo(id: any) {
    // Remove the current video (if any)
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.parentElement?.remove();
    }

    // Create a new foreignObject for the video
    const foreignObject = svg
      .append("foreignObject")
      .attr("y", -500) // Adjust the Y-coordinate as needed
      .attr("width", 100)
      .attr("height", 100);

    // Create the video element using native JavaScript
    const video = document.createElement("video");
    video.id = id;
    video.width = 100;
    video.height = 100;
    video.style.cssText = "object-fit: cover; border-radius: 50px";
    video.muted = true;
    video.src = "../../square-sample.mp4"; // Adjust the path as needed

    // Append the video to the foreignObject
    foreignObject.node()!.appendChild(video);

    // // Play the video and set it as the current video
    // video.play()
    //   .then(() => {
    //     console.log("Video is playing");
    //     currentVideo = video;
    //   })
    //   .catch((error) => {
    //     console.error("Video playback error:", error);
    //   });
    return {foreignObject, video, id}
  }
  
  // Inside your click event handler, call handleCityClick and pass the event object
  g.selectAll("path.cities").data(data.features)
    .enter().append("path")
    .attr("class", "cities")
    .attr("d", path)
    .attr("fill", "#fa759e")
    .attr("fill-opacity", 0.3)
    .on("click", (city: any, event: any) => handleCityClick(city, event)); // Attach click event handler
    
  const pairs = getRandomCityPairs(1); // Generate 1 random city pairs
  g.selectAll("path.cityAnim")
  .data(pairs.map((pair)=>pair[1]))
  .enter().append("path")
  .attr("class", "cityAnim")
  .attr("d", pathAnim.pointRadius(0))
  .attr("fill", "#fa759e")
  .attr("stroke", "white")
  .attr("fill-opacity", 0.3)
 
  // start spinning!
  spinning_globe()
  let videoList: any = [];
  
  const pathStyle = {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    animation: "dash 5s linear alternate infinite",
  };
  const keyframesStyle = {
    animationName: "dash",
    animationDuration: "5s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  };
  
  // Draw lines connecting city pairs
  pairs.forEach(function (pair) {
    const id = `id-${pair[1].geometry.coordinates[0]}${pair[1].geometry.coordinates[1]}`;
    svg.append("path")
      .datum({
        type: "LineString",
        coordinates: [pair[0].geometry.coordinates, pair[1].geometry.coordinates],
        id,
        data: pair,
      })
      .attr("class", "city-line")
      .style("stroke", "white")
      .style("fill", "none")
      .style("stroke-width", 0.5)
          
      videoList.push(appendVideo(id));
  });
  
  let startVideo = true;
  function spinning_globe() {
    let animationStatus = 'running';
    let startTime: number | null = Date.now();

    function animate(elapsed: number) {
      if (!startTime) {
        startTime = time;
      }
      const duration = 5000;
      const t = Math.min(1, elapsed / duration); // Calculate the time factor between 0 and 1

      // get current time
      const dt = Date.now() - startTime;
      if (dt > duration) {
        animationStatus = 'stop';
      }
      // get the new position from the modified projection function
      projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);

      const diff = elapsed / duration;
      const radius = Math.max(Math.min((diff * 100) - 100, 50), 0);
      svg.selectAll("path.cities").attr("d", path); //default circle 
      svg.selectAll("path.cityAnim").attr("d", pathAnim.pointRadius(radius)); //default circle 

      svg.selectAll(".city-line") // city connection
        .attr("d", function (d: any) {
          // Interpolate between the starting and ending coordinates
          const startCoordinates = d.coordinates[0];
          const endCoordinates = d.coordinates[1];
          if (animationStatus == 'stop') {
            // Play all the video 
            if(startVideo) { 
              videoList.map((each: any)=>{
                each.video.play()
                .then(() => {
                  console.log("Video is playing");
                })
                .catch((error: any) => {
                  console.error("Video playback error:", error);
                });
              })
              startVideo = false;
            }
            

           
           const cityAnimCircle = svg.selectAll("path.cityAnim")
           let videoShouldVisible: any = []; // Remove video if opposite of the globe 
           // Loop through each circle to check if the circle is opposite of the globe 
           // We can decide if the circle is opposite of the globe by checking path attribute [d]
            cityAnimCircle.each(function (this: HTMLElement, dChild: any) {
              const attributes = this.attributes;
              // Check the circle is opposite of the globe by the d attribute
              // d attribute will not exist with the path while opposite 
              for (let i = 0; i < attributes.length; i++) {
                const attributeName = attributes[i].name;
                if(attributeName === 'd') { 
                  const id = `id-${dChild.geometry.coordinates[0]}${dChild.geometry.coordinates[1]}`;
                  videoShouldVisible.push({id, coordinates:dChild.geometry.coordinates});
                } 
              }
            });
            // filter the visible video list
            const videos = videoList.filter((e: any)=>videoShouldVisible.some((visible: any)=>visible.id == e.id))
            // filter the video that should be hide
            const videosShouldHide =  videoList.filter((e: any)=> !videoShouldVisible.some((visible: any)=>visible.id == e.id))
            videos.map((video: any, i: number)=>{
              const [x, y] = projection(videoShouldVisible[i].coordinates)!;
              video.foreignObject.attr("x", x-50).attr("y", y-50);
            })
            videosShouldHide.map((video: any, i: number)=>{
              video.foreignObject.attr("y", -500); // -500 means removed from the viewport
            })
           
          }
         return pathConnection({ type: "LineString", coordinates: [startCoordinates, endCoordinates] });
        })
     requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // // hackish approach to get bl.ocks.org to display individual height
  // d3.select(self.frameElement).style("height", height + "px")
}

export default function SpinningGlobe() {
  useEffect(() => {
    const d3Script = document.getElementById('d3-script')!
    d3Script.addEventListener('load', () => {
      spinGlobe()
    })
  })

  return (
    <>
      <Script async id="d3-script" src="https://cdn.jsdelivr.net/npm/d3@7" />
      <svg id="globe" />
    </>
  )
}
