import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { select, line, scaleLinear, curveCardinal } from 'd3'
import './minimap.css'
const Minimap = (props) => {
   const data = []

   if (props.data !== null || props.data !== undefined || props.data !== "" || props.data !== []) {
      data.push(...props.data)

   }
   const d = [data[data.length - 1]]
   const max = Math.max(...data)
   const svgref = useRef();
   const xScale = scaleLinear()
      .domain([0, 41])
      .range([0, 280])
   const yScale = scaleLinear()
      .domain([0, max])
      .range([100, 10])
   useEffect(() => {
      const svg = select(svgref.current)
      const myLine = line()
         .x((value, index) => xScale(index))
         .y(yScale)
         .curve(curveCardinal);
      svg
         .selectAll('.line')
         .data([data])
         .join('path')
         .attr('d', myLine)
         .attr('stroke', props.color)
         .attr('stroke-width', '4px')
         .attr('fill', 'none');
      /*svg
         .selectAll('circle')
         .join('circle')
         .data(34)
         .attr('r', '4')
         .attr('cx', '260')
         .attr('cy', '20')
         .attr('stroke', 'red')
         .attr('fill', 'red');*/
      svg
         .selectAll('circle')
         .data(d)
         .join('circle')
         .attr('r', '3')
         .attr('cx', (value, index) => xScale(data.length - 1))
         .attr('cy', yScale)
         .attr('fill', props.color)
         .attr('stroke', props.color);

   }, [])
   if (data !== null || data !== undefined || data !== "") {
      return (
         <div className="container">
            <svg ref={svgref}>
            </svg>
         </div>
      )
   }
   else {
      return null
   }

}
export default (Minimap)