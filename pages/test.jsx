/** @format */

import { useEffect } from 'react'

const test = () => {
	const data = {
		title: 'aswq',
		src: '/images/alirez.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
		newData: {
			title: 'sdfa',
			src: '/imagesasaw/ali.jpg',
			price: 727,
			category: 'P&Odfb5r$I%T#E^M$',
			description:
				'this post just created for happy freedome to al.akbarporJojegan',
		},
	}
	useEffect(() => {
		;(async () => {
			const callPostManager = await fetch('api/data/Post/Admin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					authType: '*D(e&L*e$T#e$o%y*a!',
					data,
					user: 'al.akbarPoor',
				}),
			})
			const res = await callPostManager.json()
			console.log(res)
		})()
	}, [])
	return <></>
}
export default test
