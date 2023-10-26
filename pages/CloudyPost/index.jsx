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
		const yekta = []
		for (let i = 0; i < 55; i++) {
			if (i > 5 && i < 21) {
				const x = width / 1.65 - (i - 7) * 40
				const y = i % 2 === 0 ? width / 20 : width / 14
				yekta.push({ x, y })
			}
			//Left
			if (i > 21 && i < 30) {
				const x = i % 2 != 0 ? width / 3.3 : width / 3.5
				const y = width / 24 + (i - 21) * 40
				yekta.push({ x, y })
			}
			//Bottom
			if (i > 30 && i < 47) {
				const x = width / 4 + (i - 30) * 40
				const y = i % 2 != 0 ? width / 4 : width / 3.7
				yekta.push({ x, y })
			}
			if (i > 46 && i < 55) {
				const x =
					i === 54
						? width / 1.59
						: i % 2 != 0
						? width / 1.6 + (i - 16)
						: width / 1.65 + (i - 16)
				const y = i === 54 ? width / 20 : width / 4 - (i - 46) * 40
				yekta.push({ x, y })
			}
		}
		const data = [
			//Right-Side
			{ x: width / 1.6, y: width / 4 },
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
			// Top-Side
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
			// Left-Side

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

			// { x: width / 2.7, y: width / 5 },

			//Bottom-Side

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
		]

		const curveGenerator = () =>
			d3
				.line()
				.x((d) => d.x)
				.y((d) => d.y)
				.curve(d3.curveStepBefore) // Use curveCatmullRom for a smoother connection

		svg
			.append('path')
			.datum(data)
			.attr('d', curveGenerator())
			.attr('fill', 'url(#imagePattern)') // Apply the image pattern fill
			.attr('stroke', 'lightblue')
			.attr('stroke-width', 4)

		svg
			.append('defs')
			.append('pattern')
			.attr('id', 'imagePattern') // Set a unique ID for the pattern
			.attr('patternUnits', 'userSpaceOnUse')
			.attr('width', width)
			.attr('height', height)
			.append('image')
			.attr('xlink:href', '/images/ali.jpg') // Replace with your image URL
			.attr('width', '100%')
			.attr('height', '50%')
		      .attr('preserveAspectRatio', 'xMidYMid meet'); // Maintain aspect ratio

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
