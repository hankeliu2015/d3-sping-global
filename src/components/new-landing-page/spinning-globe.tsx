"use client"
import Script from "next/script"
import { useEffect } from "react"

function spinGlobe() {
  const { d3 } = (window as any)

  // Map configuration
  const width  = 620;
  const height = 620;
  const rScale = d3.scale.sqrt();
  console.log('rScale', rScale)
  const peoplePerPixel = 40000;
  let max_population = [];

  // Configuration for the spinning effect
  const time = Date.now();
  const rotate = [0, 0];
  const velocity = [.0075, -0];

  // set projection type and paremetes
  const projection = d3.geo.orthographic()
    .scale(300)
    .translate([(width / 2) + 100, height / 2])
    .clipAngle(90)
    .precision(0.3);

  // create path variable, empty svg element and group container
  const path = d3.geo.path()
    .projection(projection);
  const svg = d3.select("svg");
  const g = svg.append("g");

  // drawing dark grey spehere as landmass
  g.append("path")
    .datum({type: "Sphere"})
    .attr("class", "sphere")
    .attr("d", path)
    .attr("fill", "#0D0D0D");

  // loading city locations from geoJSON
  d3.json("https://gist.githubusercontent.com/PatrickStotz/1f19b3e4cb848100ffd7/raw/dd96e6344c0ea00872018e5e74ad6d96f30ff500/geonames_cities_100k.geojson", function(error, data) {

    // Handle errors getting and parsing the data
    if (error) { throw error; }

    console.log('data', data)

    // setting the circle size (not radius!) according to the number of inhabitants per city
    const population_array = [];
    for (let i = 0; i < data.features.length; i++) {
        population_array.push(data.features[i].properties.population);
    }
    max_population = population_array.sort(d3.descending)[0]
    const rMin = 0;
    const rMax = Math.sqrt(max_population / (peoplePerPixel * Math.PI));
    rScale.domain([0, max_population]);
    rScale.range([rMin, rMax]);

    path.pointRadius(function(d: any) {
      return d.properties ? rScale(d.properties.population) : 1;
    });

    // Drawing transparent circle markers for cities
    g.selectAll("path.cities").data(data.features)
      .enter().append("path")
      .attr("class", "cities")
      .attr("d", path)
      .attr("fill", "#64c1ff")
      .attr("fill-opacity", 0.3);

    // start spinning!
    spinning_globe();
  });

  function spinning_globe() {
    d3.timer(function() {

      // get current time
      const dt = Date.now() - time;

      // get the new position from modified projection function
      projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);

      // update cities position = redraw
      svg.selectAll("path.cities").attr("d", path);
    });

  }

  // hackish approach to get bl.ocks.org to display individual height
  d3.select(self.frameElement).style("height", height + "px");
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
      {/* <div id='globe-container'> */}
        <svg id="globe" />
      {/* </div> */}
      
    </>
  )
}