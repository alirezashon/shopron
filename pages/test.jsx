/** @format */

import { useEffect } from 'react'

const test = () => {
	const data = [
		{
			title: 'Post 1',
			src: '/images/ali.jpg',
			price: 10,
			category: 'GolOghlan',
			description: 'Description of Post 1',
		},
		{
			title: 'Post 2',
			src: '/images/ali.jpg',
			price: 20,
			category: 'GolOghlan',
			description: 'Description of Post 2',
		},
		{
			title: 'Post 3',
			src: '/images/ali.jpg',
			price: 30,
			category: 'GolOghlan',
			description: 'Description of Post 3',
		},
		{
			title: 'Post 4',
			src: '/images/ali.jpg',
			price: 40,
			category: 'GolOghlan',
			description: 'Description of Post 4',
		},
	]
	const callIt = async () => {
		data.map(async(post) => {
			const callPostManager = await fetch('api/data/Post/Admin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					authType: '!I@N$e$r%T&O*',
					data: post,
					user: 'al.akbarPoor',
				}),
			})
			const res = await callPostManager.json()
			console.log(res)
		})
		}
		return (
			<>
			<button onClick={callIt}> callit</button>
		</>
	)
}
export default test
