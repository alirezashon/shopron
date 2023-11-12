/** @format */

import {Add, Remove} from './Basket/Actions'

import { useEffect } from 'react'

const test = () => {
	const data = {
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
		newData: {
			title: 'EBiramoza',
			src: '/images/alireza.jpg',
			price: 727,
			category: 'P&Odfb5r$I%T#E^M$',
			description:
				'this post just created for happy freedome to al.akbarporJojegan',
		},
	}
	// useEffect(() => {
	// 	;(async () => {
	// 		const callPostManager = await fetch('api/data/Post/Admin', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify({
	// 				authType: '&U*P^d%A&T^e%O#Y@',
	// 				data,
	// 				user: 'al.akbarPoor',
	// 			}),
	// 		})
	// 		const res = await callPostManager.json()
	// 		console.log(res)
	// 	})()
	// }, [])

	return (
		<>
			<button onClick={async () => await Add('thankaGPT')}>add</button>
			<button onClick={async () => await Remove('thankaGPT')}>remove</button>
		</>
	)
}
export default test
