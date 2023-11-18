/** @format */

import styles from './index.module.css'
import * as d3 from 'd3'
import { useRef, useEffect, useState } from 'react'
import Assetronerch from '../Assetronerch'
const TreeSelector = () => {
	const svgRef = useRef(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [width, setWidth] = useState()
	const [height, setHeight] = useState()
	const [selectedMonth, setSelectedMonth] = useState([])
	const [assetronerchData, setAssetronerchData] = useState([])
	const [assetronerchVisibility, setAssetronerchVisibility] = useState(false)
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Augest',
		'September',
		'October',
		'November',
		'December',
	]

	const fetchData = async () => {
		const user = localStorage.getItem('user')
		const response = await fetch('/api/Logs/Data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user, authType: '*G&E%T#D$A@t$A%s^s&E*t^' }),
		})
		const logs = await response.json()
		setData(logs.data)
	}
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		})
		if (window.innerWidth !== width || window.innerHeight !== height) {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
		fetchData()
	}, [])

	const paginationCount = 18
	const totalPages = Math.ceil(data.length / paginationCount)
	const startIndex = (currentPage - 1) * paginationCount
	const endIndex = startIndex + paginationCount
	const pageData = data.slice(startIndex, endIndex)
	const generateSequence = (n, arr) => {
		if (n === 0) return arr
		const last = arr[arr.length - 1]
		const next = last === 1 ? 2 : 1
		return generateSequence(n - 1, [...arr, next])
	}
	const numberOfLog = data.length
	const treeData = generateSequence(numberOfLog, [])

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		svg.selectAll('*').remove()
		const quarterWidth = width / 4
		const quarterHeight = height / 4

		const radius = width / 7
		const angle = (2 * Math.PI) / month.length
		const x1 = quarterWidth / 2.8
		const x2 = quarterWidth * 1.3
		const datesRectWidth = width / 11
		const datesRectHeight = width / 33
		let paddingY = width / 38
		let lineY1 = width / 44
		let lineY2 = width / 44

		if (svgRef.current) {
			d3.select(svgRef.current).selectAll('*').remove()
		}
		const creaTree = () => {
			const dates = svg
				.append('rect')
				.attr('id', 'dates')
				.attr('x', quarterWidth - datesRectWidth / 2 || 0)
				.attr('y', height / 25 || 0)
				.attr('width', datesRectWidth || 0)
				.attr('height', datesRectHeight || 0)
				.attr('rx', '1vh')
				.attr('ry', '1vh')
				.attr('fill', '#11729c')
				.style('cursor','pointer')
				.style('stroke', '#84d3f5')
				.style('stroke-width', '.5vh')
			

			const datext = svg
				.append('text')
				.attr('id', 'dates')
				.attr('x', quarterWidth || 0)
				.attr('y', height / 23 + datesRectHeight / 2 || 0)
				.attr('text-anchor', 'middle')
				.attr('font-size', '1vw')
				.text('Logs')
				.attr('fill', '#FFFFFF')
				.attr('cursor', 'pointer')
			//hover of dates
			svg
				.selectAll('#dates')
				.on('mouseover', () => dates.attr('fill', '#32a893'))
				.on('mouseleave', () => dates.attr('fill', '#11729c'))
			const treeItems = svg.append('g')

			const centerLine = treeItems
				.selectAll('line')
				.data(pageData)
				.enter()
				.append('line')
				.transition()
				.duration(500)
				.attr('x1', quarterWidth || 0)
				.attr('x2', quarterWidth || 0)
				.attr('y1', height / 25 + datesRectHeight || 0)
				.attr('y2', height / 1.16 || 0)
				.attr('id', 'treeModel')
				.attr('stroke', '#11729c')
				.attr('stroke-width', '.01vh')
			const treeLines = svg
				.append('g')
				.selectAll('line')
				.data(pageData)
				.enter()
				.append('line')
				.transition()
				.duration(757)
				.attr('x1', quarterWidth || 0)
				.attr('x2', (d, i) => (i % 2 === 0 ? x1 + datesRectWidth : x2) || 0)
				.attr('y1', (d, i) => {
					if (i % 2 === 0) {
						lineY1 += height / 11
						return lineY1
					}
					return lineY1 || 0
				})
				.attr('y2', (d, i) => {
					if (i % 2 === 0) {
						lineY2 += height / 11
						return lineY2 + datesRectHeight / 2
					}
					return lineY2 + datesRectHeight / 2 || 0
				})
				.attr('id', 'treeModel')
				.attr('stroke', '#ffffff')
				.attr('stroke-width', '.07vh')

			// ---------------RECTS-------------

			const rects = treeItems
				.selectAll('rect')
				.data(pageData)
				.enter()
				.append('rect')
				.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2) || 0)
				.attr('y', (d, i) => {
					if (i % 2 === 0) {
						paddingY += height / 11

						return paddingY
					}

					return paddingY || 0
				})
				.attr('width', datesRectWidth || 0)
				.attr('height', datesRectHeight || 0)
				.attr('rx', '1vh')
				.attr('ry', '1vh')
				.attr('id','rects')
 				.attr('fill', '#02394f')
				.style('stroke-dasharray', '1vh .4vh')
				.style('stroke-width', '.5vh')
				.style('stroke', '#45bded')

			paddingY = width / 22

			rects
				.transition()
				.duration(700)
				.attrTween('transform', function (d, i) {
					return d3.interpolateString(
						`rotate(${i * (30 / data.length) || 0}, ${
							2.8 * quarterWidth || 0
						}, ${quarterHeight / 2 || 0})`,
						`rotate(${i * (0 / data.length) + 360 || 0}, ${
							2 * quarterWidth || 0
						}, ${quarterHeight / 2 || 0})`
					)
				})

			const texts = treeItems
				.selectAll('text')
				.data(pageData)
				.enter()
				.append('text')
 				.attr('x', (d, i) =>
					i % 2 === 0 ? x1 + datesRectWidth / 2 : x2 + datesRectWidth / 2 || 0
				)
				.attr('y', (d, i) => {
					if (i % 2 === 0) {
						paddingY += height / 11

						return paddingY
					}

					return paddingY || 0
				})
				.attr('id','rects')
				.attr('text-anchor', 'middle')
				.attr('treeModelgnment-baseline', 'middle')
				.text((d) => d.time.split('T')[0])
				.attr('id', 'treeModel')
				.attr('fill', '#ffffff')
				.attr('font-size', width > height ? '1vw' : '1.3vw')
				.style('cursor', 'pointer')
				.style('opacity', 0)
				.on('click', (e, d) => {
					setAssetronerchVisibility(true)
					setAssetronerchData(d.data.slice(1))
				})
			d3.range(10).forEach((i) => {
				setTimeout(() => {
					texts.style('opacity', 0.1 * i)
				}, i * 110)
			}) 
 			svg.selectAll('#rects').on('mouseover',(e,i)=> rects.attr('fill','red'))
		}
		// -----------------Star--------Selector ----------------

		const createStarelector = () => {
			//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
			const lines = svg.append('g').selectAll('line').data(month).enter()
			// ایجاد دایره اصلی و پیوست تصویر به آن
			const userImg = svg
				.append('defs')
				.append('clipPath')
				.attr('id', 'circle-clips')
				.append('circle')
				.attr('cx', 2.8 * quarterWidth || 0)
				.attr('cy', quarterHeight * 2 || 0)
				.attr('r', (width / 14) * 0.28 || 0)
				.attr('id', 'image')
			svg
				.attr('id', 'borderCenterImage')
				.append('circle')
				.attr('cx', 2.8 * quarterWidth || 0)
				.attr('cy', quarterHeight * 2 || 0)
				.attr('r', (width / 14) * 0.28 || 0)
				.attr('fill', 'white')
				.attr('stroke', '#84d3f5')
				.attr('stroke-width', '.6vh')
				.style('stroke-dasharray', '2vh .4vh')

			const userImgBox = svg
				.append('g')
				.attr('clip-path', 'url(#circle-clips)')
				.append('image')
				.attr('href', '/images/logo.jpg')
				.attr('x', 2.8 * quarterWidth - (width / 18) * 0.5 || 0)
				.attr('y', quarterHeight * 2 - (width / 18) * 0.5 || 0)
				.attr('width', width / 18 || 0)
				.attr('height', width / 18 || 0)

			lines
				.append('line')
				.attr('x1', 2.8 * quarterWidth || 0)
				.attr('x2', 2.8 * quarterWidth || 0)
				.attr('y1', quarterHeight * 2 || 0)
				.attr('y2', quarterHeight * 2 || 0)
				.transition()
				.duration(2555)
				.attr('x1', 2.8 * quarterWidth || 0)
				.attr(
					'x2',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr('y1', quarterHeight * 2 || 0)
				.attr(
					'y2',
					(d, i) => quarterHeight * 2 + radius * Math.sin(i * angle) || 0
				)
				.style('stroke', '#ffffff')
				.style('stroke-dasharray', '1vh .2vh')

				.attr('stroke-width', 2)

			const monthBox = svg
				.append('g')
				.selectAll('circle')
				.data(month)
				.enter()
				.append('circle')
				.attr(
					'cx',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr(
					'cy',
					(d, i) => quarterHeight * 2 + radius * Math.sin(i * angle) || 0
				)
				.attr('r', (d, i) =>
					[2, 3, 4, 5, 6].includes(i)
						? width / 60 || 0
						: [0, 1, 7, 9].includes(i)
						? width / 44 || 0
						: width / 33 || 0
				)
				.attr('fill', '#02394f')
				.style('stroke', '#84d3f5')
				.style('stroke-width', '.7vh')
				.style('stroke-dasharray', '1vh .2vh')

			monthBox
				.transition()
				.duration(700)
				.attrTween('transform', function (d, i) {
					return d3.interpolateString(
						`rotate(${i * (360 / data.length) || 0}, ${
							2.8 * quarterWidth || 0
						}, ${quarterHeight * 2 || 0})`,
						`rotate(${i * (0 / data.length) + 360 || 0}, ${
							2.8 * quarterWidth || 0
						}, ${quarterHeight * 2 || 0})`
					)
				})

			const datasName = svg
				.append('g')
				.selectAll('text')
				.data(month)
				.enter()
				.append('text')
				.attr(
					'x',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr(
					'y',
					(d, i) => quarterHeight * 2.02 + radius * Math.sin(i * angle) || 0
				)
				.attr('text-anchor', 'middle')
				.attr('font-size', width > height ? '1vw' : '1.3vw')
				.attr('treeModelgnment-baseline', 'middle')
				.style('fill', '#e3efff')
				.text((d) => d)
				.style('cursor', 'pointer')
				.style('opacity', 0)
				.on('click', (d, i) => {
					console.log()
					const matchedMonth = data.filter(
						(log) =>
							parseInt(log.time.split('T')[0].split('-')[1]) ===
							month.findIndex((index) => index === i) + 1
					)
					const noneMatchedMonth = data.filter(
						(log) =>
							parseInt(log.time.split('T')[0].split('-')[1]) !==
							month.findIndex((index) => index === i) + 1
					)
					setData([...matchedMonth, ...noneMatchedMonth])
					console.log(matchedMonth)
				})

			setTimeout(() => {
				datasName.style('opacity', 1)
			}, 1111)
		}
		creaTree()
		createStarelector()
	}, [
		width,
		height,
		data,
		month,
		currentPage,
		paginationCount,
		pageData,
		treeData,
		setAssetronerchData,
	])

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = (e) => {
		setCurrentPage(parseInt(e.target.value))
	}

	const pages = []

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i)
	}

	return (
		<>
			<div className={styles.container}>
				<Assetronerch
					excelData={assetronerchData}
					visible={assetronerchVisibility}
				/>
				<svg
					className={styles.treeSelector}
					width={'100vw'}
					height={'100vh'}
					ref={svgRef}
				/>
				<div className={styles.paginationContainer}>
					<div className={styles.pagination}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={currentPage === 1}>
							Previous
						</button>

						<div className={styles.pagesContainer}>
							{pages.map((page) => (
								<input
									key={page}
									value={page}
									type='button'
									onClick={handlePageClick}
									className={styles.input}
								/>
							))}
						</div>

						<button
							className={styles.button}
							onClick={handleNext}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TreeSelector
