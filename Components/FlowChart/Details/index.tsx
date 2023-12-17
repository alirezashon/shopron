/** @format */

import React, { CSSProperties, useEffect, useState } from 'react'
import { Get } from '../../Basket/Actions'
import Product from './Post'
interface Post {
	_id: string
	title: string
	src: string
	price: number
	category: string
	quantity: number
	description: string
}
interface Styles {
	ProductBox: CSSProperties
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
	}, [data])
	return (
		<>
			<h1>Details</h1>
			<div style={styles.ProductBox}>
				<Product posts={postData} />
			</div>
		</>
	)
}

export default Details

const styles: Styles = {
	ProductBox: {
		width:'30%'
	},
}
