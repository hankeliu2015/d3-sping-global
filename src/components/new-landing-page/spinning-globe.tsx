"use client"
import Script from "next/script"
import data from "./geo.json"
import { useEffect } from "react"

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
  const { d3 } = (window as any)

  // Map configuration
  const width = 620
  const height = 620
  const rScale = d3.scale.sqrt()

  const peoplePerPixel = 40000

  // Configuration for the spinning effect
  const time = Date.now()
  const rotate = [0, 0]
  const velocity = [.0075, -0]

  // set projection type and paremetes
  const projection = d3.geo.orthographic()
    .scale(300)
    .translate([(width / 2), height / 2])
    .clipAngle(90)
    .precision(0.3)

  console.log('projection', projection)

  // create path variable, empty svg element and group container
  const path = d3.geo.path().projection(projection)
  const svg = d3.select("svg#globe")
  const g = svg.append("g")

  // drawing dark grey sphere as landmass
  g.append("path")
    .datum({ type: "Sphere" })
    .attr("class", "sphere")
    .attr("d", path)
    .attr("fill", "#164176")

  // setting the circle size (not radius!) according to the number of inhabitants per city
  const population_array = data.features.map((feature) => feature.properties.population)
  const max_population = population_array.sort(d3.descending)[0]
  const rMin = 0
  const rMax = Math.sqrt(max_population / (peoplePerPixel * Math.PI))
  rScale.domain([0, max_population])
  rScale.range([rMin, rMax])

  path.pointRadius(function (d: any) {
    // console.log('d', d)
    return d.properties ? rScale(d.properties.population) : 1
  })

  // Drawing transparent circle markers for cities
  g.selectAll("path.cities").data(data.features)
    .enter().append("path")
    .attr("class", "cities")
    .attr("d", path)
    .attr("fill", "#fa759e")
    .attr("fill-opacity", 0.3)

  function animateCityCommunication() {
    const pairs = getRandomCityPairs(5); // Generate 5 random city pairs

    // Create line paths between random city pairs
    const lines = g.selectAll("path.communication")
      .data(pairs)
      .enter().append("path")
      .attr("class", "communication")
      .attr("d", (d: any) => {
        // Create a line path between the two cities
        const [city1, city2] = d;
        const coordinates1 = projection(city1.geometry.coordinates);
        const coordinates2 = projection(city2.geometry.coordinates);
        return `M${coordinates1[0]},${coordinates1[1]}L${coordinates2[0]},${coordinates2[1]}`;
      })
      .attr("stroke", "red")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.7)
      .attr("fill", "none");

    // // Animate the lines
    // lines.transition()
    //   .duration(3000) // Adjust the duration as needed
    //   .attr("stroke-dasharray", (d: any) => {
    //     const length = d3.select(this).node().getTotalLength();
    //     return `${length} ${length}`;
    //   })
    //   .attr("stroke-dashoffset", 0)
    //   .remove();
  }

  // Call the animation function to start the inter-city communication animation
  animateCityCommunication();

  // start spinning!
  spinning_globe()

  function spinning_globe() {
    const timer = d3.timer(function () {

      // get current time
      const dt = Date.now() - time

      if (dt > 10000) {
        throw new Error('Done!')
      }

      // get the new position from modified projection function
      projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt])

      // update cities position = redraw
      svg.selectAll("path.cities").attr("d", path)
    })

    console.log('timer', timer)
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
  }, [])

  return (
    <>
      <Script async id="d3-script" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js" />
      <svg id="globe" />
    </>
  )
}