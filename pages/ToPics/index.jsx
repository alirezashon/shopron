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
		for (let i = 0; i < 77; i++) {
			if (i < 14) {
				const x = width / 90 + (i * width) / 44
				const y = i % 2 === 0 ? width / 14 : width / 20
				yekta.push({ x, y })
			}
			//Left
			if (i > 14 && i < 28) {
				const x = width / 90 + (i * width) / 44
				const y = width / 24 + (i - 14) * 40
				yekta.push({ x, y })
			}
			//Bottom
			if (i > 28 && i < 57) {
				const x = width / 2 - (i - 35) * (width / 44)
				const y = i % 2 === 0 ? width / 2.2 : width / 2.3
				yekta.push({ x, y })
			}
			if (i > 57 && i < 75) {
				const x = i % 2 === 0  ? width / 90 : width/33
				const y = width / 2 - (i - 57) * 40
				yekta.push({ x, y })
			}
		}

		const curveGenerator = () =>
			d3
				.line()
				.x((d) => d.x)
				.y((d) => d.y)
				.curve(d3.curveStepBefore) // Use curveCatmullRom for a smoother connection

		svg
			.append('path')
			.datum(yekta)
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
			.attr('width', width)
			.attr('height', height)
			.attr('preserveAspectRatio', 'xMidYMid meet') // Maintain aspect ratio
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
