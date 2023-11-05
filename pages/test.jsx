/** @format */

import { useEffect } from 'react'

const test = () => {
	const data = {
		title: 'Bandom',
		src: '/images/alirez.jpg',
		price: '7777777$',
		category: 'P&O*S^T$I%T#E^M$',
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	}
	useEffect(() => {
		;(async () => {
			const callPostManager = await fetch('api/Post/Admin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					authType: '!I@N$e$r%T&O*',
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
