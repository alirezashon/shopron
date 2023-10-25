/** @format */

import * as d3 from 'd3'
import { useEffect } from 'react'
import { useRef } from 'react'

const CloudyPost = () => {
	const svgRef = useRef(null)

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		svg.selectAll('*').remove()

		const curveGenerator = () =>
			d3
				.line()
				.x((d) => d.x)
				.y((d) => d.y)
				.curve(d3.curveCatmullRom) // Use curveCatmullRom for a smoother connection

		const drawCurve = (curveData, bg, color) => {
			svg
				.append('path')
				.datum(curveData)
				.transition()
				.duration(2222)
				.ease(d3.easeBounceInOut)
				.attr('fill', bg)
				.attr('stroke', color)
				.attr('stroke-width', 4)
				.attr('d', curveGenerator())
		}

		const data = [
			{ x: width / 1.62, y: width / 4.7 },
			{ x: width / 1.65, y: width / 5 },
			{ x: width / 1.6, y: width / 5.5 },
			{ x: width / 1.65, y: width / 6 },
			{ x: width / 1.6, y: width / 6.5 },
			{ x: width / 1.65, y: width / 7 },
			{ x: width / 1.6, y: width / 8 },
			{ x: width / 1.65, y: width / 9 },
			{ x: width / 1.6, y: width / 11 },
			{ x: width / 1.65, y: width / 11 },
			{ x: width / 1.6, y: width / 14 },
			{ x: width / 1.65, y: width / 16 },
			{ x: width / 1.7, y: width / 26 },
			{ x: width / 1.8, y: width / 20 },
			{ x: width / 1.9, y: width / 27 },
			{ x: width / 2, y: width / 20 },
			{ x: width / 2.1, y: width / 27 },
			{ x: width / 2.2, y: width / 22 },
			{ x: width / 2.3, y: width / 29 },
			{ x: width / 2.4, y: width / 22 },
			{ x: width / 2.5, y: width / 30 },
			{ x: width / 2.7, y: width / 21 },
			{ x: width / 2.8, y: width / 18 },
			{ x: width / 2.7, y: width / 16 },
			{ x: width / 2.8, y: width / 14 },
			{ x: width / 2.7, y: width / 12 },
			{ x: width / 2.8, y: width / 11 },
			{ x: width / 2.7, y: width / 10 },
			{ x: width / 2.8, y: width / 9 },
			{ x: width / 2.7, y: width / 8 },
			{ x: width / 2.8, y: width / 7.5 },
			{ x: width / 2.7, y: width / 7 },
			{ x: width / 2.8, y: width / 6.5 },
			{ x: width / 2.7, y: width / 6 },
			{ x: width / 2.8, y: width / 5.5 },
			{ x: width / 2.7, y: width / 5 },
			{ x: width / 2.8, y: width / 4.5 },
			{ x: width / 2.5, y: width / 5 },
			{ x: width / 2.4, y: width / 4.7 },
			{ x: width / 2.3, y: width / 5 },
			{ x: width / 2.2, y: width / 4.7 },
			{ x: width / 2.1, y: width / 5 },
			{ x: width / 2, y: width / 4.7 },
			{ x: width / 1.9, y: width / 5 },
			{ x: width / 1.8, y: width / 4.4 },
			{ x: width / 1.75, y: width / 5 },
			{ x: width / 1.7, y: width / 4.3 },
			{ x: width / 1.68, y: width / 4.8 },
			{ x: width / 1.6, y: width / 4.4 },
			{ x: width / 1.62, y: width / 4.7 },
		]

		drawCurve(data, 'white', 'lightblue')
	}, [])

	return (
		<>
			<svg
				ref={svgRef}
				width={'100vw'}
				height={'100vh'}
			/>
		</>
	)
}

export default CloudyPost
