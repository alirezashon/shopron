/** @format */

import React, { useEffect, useState } from 'react'
import { Get } from '../../Basket/Actions'
import Product from '../../Basket/Products'
interface Post {
	_id: string
	title: string
	src: string
	price: number
	category: string
	quantity: number
	description: string
}

const Details: React.FC = () => {
	const [postData, setPostData] = useState<Post[]>([])
	const data: string[] = Get()

	useEffect(() => {
		;(async () => {
			const response = await fetch('/api/data/Post/Client/bulk', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					bulkID: data,
					authType: 'G&E!T*P^R$O#D$U^C@T*B^u$l*K$',
				}),
			})
			const posts = await response.json()
			console.log(response)
			console.log(posts)
			setPostData(posts.products)
		})()
	}, [])
	return (
		<>
			{postData.length}
			{data.length > 0 && data.map((d) => <p key={d}>{d}</p>)}
			<h1>Details</h1>
		</>
	)
}

export default Details
