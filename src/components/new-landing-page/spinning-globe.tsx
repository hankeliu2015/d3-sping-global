"use client"
import Script from "next/script"
import data from "./geo.json"
import { useEffect } from "react"
import * as d3 from "d3"
// Function to generate random pairs of cities
function getRandomCityPairs(count: number) {
  const pairs = [];
  // assign index object to each city properties
  data.features.forEach((feature, i) => {
    Object.assign(feature.properties, { i })
  })
  for (let i = 0; i < count; i++) {
    const city1 = data.features[Math.floor(Math.random() * data.features.length)];
    let city2, city3
    do {
      city2 = data.features[Math.floor(Math.random() * data.features.length)];
      // city3 = data.features[Math.floor(Math.random() * data.features.length)];
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
    .attr("d", path)
    .attr("fill", "#164176")

  // setting the circle size (not radius!) according to the number of inhabitants per city
  const population_array = data.features.map((feature) => feature.properties.population)
  const max_population = population_array.sort(d3.descending)[0]
  const rMin = 0
  const rMax = Math.sqrt(max_population / (peoplePerPixel * Math.PI))
  rScale.domain([0, max_population])
  rScale.range([rMin, rMax])

  // city radius size base on scaled population
  path.pointRadius(function (d: any) {
    return d.properties ? rScale(d.properties.population) : 1
  })

  // set cities svg path's d attribute
  g.selectAll("path.cities").data(data.features)
    .enter().append("path")
    .attr("class", "cities")
    .attr("d", (feature: any)=> path(feature))    
    .attr("fill", "#fa759e")
    .attr("fill-opacity", 0.3)
  
  // Generate a random city-pairs
  const pairs = getRandomCityPairs(2);
  
  // animations started!
  spinning_globe_connecting_cities_animating()

  function spinning_globe_connecting_cities_animating() {
    let startTime: number | null = Date.now();
    
    // TODO: 
    // let cityPairs: any[] = []
    // let index = 0;
    // function animateNextCityPair() {
      //   if (index < cityPairs.length) {
        //     let currentPair = cityPairs[index]; 
        //     animateCityPair(currentPair); 
        //     index++;
        //   }
        // }
        // function animateCityPair(pair: any) {
          //   return 
          // }
          
    // generate circle for the city pair[1] and set the city redius/circle to animation intial radius value 0. 
    let pair = pairs[0] // nested paris array
    g.selectAll("path.cityAnim")
      .data([pair[1]])
      .enter().append("path")
      .attr("class", "cityAnim")
      .attr("d", pathAnim.pointRadius(0))
      .attr("fill", "#fa759e")
      .attr("stroke", "white")
      .attr("fill-opacity", 0.3)

    pairs.forEach(function (pair) {
      svg.append("path")
        .attr("class", "city-line")
        .style("stroke", "white")
        .style("fill", "none")
        .style("stroke-width", 0.5)
    });
     
    const timer = d3.timer(animate)

    function animate(elapsed: number) {
      svg.selectAll(".city-line")
      .datum({
        type: "LineString",
        coordinates: [pair[0].geometry.coordinates, pair[1].geometry.coordinates],
        id: `id-${pair[1].geometry.coordinates[0]}${pair[1].geometry.coordinates[1]}`,
        data: pair,
      })
      .attr("d", function (d: any) {
        const startCoordinates = d.coordinates[0];
        const endCoordinates = d.coordinates[1];
        return pathConnection({ type: "LineString", coordinates: [startCoordinates, endCoordinates]});
      })

      if (elapsed > 30000) {
        timer.stop()
      }
      if (!startTime) {
        startTime = time;
      }

      const duration = 5000;
      const t = Math.min(1, elapsed / duration); // Calculate the time factor between 0 and 1

      // get current time
      const dt = Date.now() - startTime;

      // get the new position from the modified projection function
      projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);

      const diff = elapsed / duration;
      // radius(white circle) become animiated(expanding) when time elapsed
      const radius = Math.max(Math.min((diff * 100) - 100, 50), 0);
      //set all cities svg path d 
      svg.selectAll("path.cities").attr("d", path); 
      
      // animate white circle radius around destination city, animated from 0 to redius-value. 
      if( radius < 50) {
        svg.selectAll("path.cityAnim").attr("d", pathAnim.pointRadius(radius));
      } else {
        // remove the animated circle and city connection-line at the end of animation cycle
        svg.selectAll("path.cityAnim").attr("d", pathAnim.pointRadius(0));
        svg.selectAll(".city-line").transition().ease(d3.easeLinear).duration(2000).style("stroke", null)
      }
    }
  }
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
