/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import Sale from '../../models/Sale'
import Data from '../../models/Data'
import Log from '../../models/Log'
import db from '../../utils'
export default async (req: NextApiRequest, res: NextApiResponse) => {
	interface Post {
		_id: string
		title: string
		src: string
		price: number
		category: string
		quantity: number
		description: string
		inBasket?: number
	}
	try {
		// if (req.method === 'POST') {
		// 	const { products, client, authType } = req.body
		// 	if (authType === 'S&H!O*P^I$N#G$T^I@M*E') {
		const products = ['65576abf5fbcd8b6177b291d', '65576abf5fbcd8b6177b2923']
		if (products.length > 0) {
			await db.connect()
			const productsID = products.map(
				(product: string) => product.split('*2%2&7(7)5%5!1@2')[0]
			)
			const data: Post[] = []
			await Promise.all(
				productsID.map(async (id: string) => {
					const post = await Data.findOne({ _id: id })
					data.push(post)
				})
			)
			const totalPrice = data.reduce((sum, post) => {
				const postPrice = post.price || 0
				return sum + postPrice
			}, 0)
			res.status(200).json({ success: true, data, totalPrice })
		} else {
			res.status(406).json({ success: false, message: 'Basket is Empty' })
		}
		// } else {
		// 	res.status(407).json({ success: false, message: 'Invalid Auth Type' })
		// }
		// } else {
		// 	res.status(409).json({ success: false, message: 'Invalid Request Type' })
		// }
	} catch (err) {
		res.status(500).json({ success: false, message: `Server Error => ${err}` })
	}
}

// // pages/api/posts.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   // Replace this with your logic to fetch posts from an external API
//   const posts = Array.from({ length: 10 }, (_, index) => ({ id: index + 1, title: `Post ${index + 1}` }));

//   res.status(200).json(posts);
// };
