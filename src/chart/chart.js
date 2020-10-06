import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import classes from './chart.module.css';
import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from 'd3'
const data = [25, 30, 35, 40, 45, 50, 20, 12, 34, 30, 40, 70, 23, 34, 34, 12, 67, 23, 1, 67, 34, 7, 34, 56, 43, 23, 45]
const PieHolder = (props) => {
   console.log(props)
   const svgRef = useRef()
   const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([10, 380]);
   const yScale = scaleLinear()
      .domain([0, 70])
      .range([180, 10])
   useEffect(() => {
      const svg = select(svgRef.current)
      const xAxis = axisBottom(xScale)
      const yAxis = axisRight(yScale)
      const myLine = line()
         .x((value, index) => xScale(index))
         .y(yScale)
         .curve(curveCardinal)
      svg.select('.x-axis')
         .style('transform', 'translateY(180px)')
         .attr('stroke-width', '2px')
         .style('color', 'red')
         .call(xAxis);
      svg.select('.y-axis')
         .style('transform', 'translateX(380px)')
         .attr('stroke-width', '2px')
         .style('color', 'red')
         .call(yAxis);
      /*svg
         .selectAll('circle')
         .data(data)
         .join('circle')
         .attr('r', '3')
         .attr('cx', (value, index) => xScale(index))
         .attr('cy', yScale)
         .attr('fill', 'red')
         .attr('stroke', 'red');*/
      svg
         .selectAll('.line')
         .data([data])
         .join('path')
         .attr('d', myLine)
         .attr('stroke', 'red')
         .attr('stroke-width', '2px')
         .attr('fill', 'none')
   }, [])



   return (
      <>
         <svg ref={svgRef} className={classes.svg1}>
            <g className="x-axis" />
            <g className="y-axis" />
         </svg>

      </>
   )
}
export default (PieHolder)