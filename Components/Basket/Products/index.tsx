// with new changes need to check it



// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import styles from './index.module.css'
// import { FaMinus } from 'react-icons/fa'
// import { MdAddCircle } from 'react-icons/md'
// import { Add, Remove } from '../Actions'
// interface Post {
// 	_id: string
// 	title: string
// 	src: string
// 	price: number
// 	category: string
// 	quantity: number
// 	description: string
// 	inBasket?: number
// }
// interface BasketStore {
// 	id: string
// 	quantity: number
// }
// const posts = [
// 	{
// 		_id: '44ads',
// 		title: 'EBiramoza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// 	{
// 		_id: '7sdfgt',
// 		title: 'EBiramoza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// 	{
// 		_id: '44adsgalobdibordada',
// 		title: 'EBiramoza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// ]
// const Product = () => {
// 	const [postStates, setPostStates] = useState<Post[]>(
// 		posts?.filter((post: Post) => ({
// 			post,
// 			isAddToBasket: false,
// 			quantity: 0,
// 		})) || []
// 	)
// 	const [basketStore, setBasketStore] = useState<string[]>([])

// 	const updateBasketState = (posts: Post[], basketItems: BasketStore[]) => {
// 		const updatedPosts = posts.map((post) => {
// 			const matchingItem = basketItems.find((item) => item.id === post._id)

// 			return {
// 				...post,
// 				inBasket: matchingItem ? matchingItem.quantity : 0,
// 			}
// 		})

// 		setPostStates(updatedPosts)
// 	}

// 	const inceriment = (id: string) => {
// 		Add(id)
// 		setBasketStore((prev) => [...prev, id])
// 	}

// 	const deceroment = (id: string) => {
// 		Remove(id)
// 		setBasketStore((prev) => [...prev, id])
// 	}

// 	useEffect(() => {
// 		const basketPost: string[] = JSON.parse(
// 			localStorage.getItem('#B!@%$&K&E^T*O(s&') || '[]'
// 		)
// 		const basketSide: BasketStore[] = []

// 		if (basketPost.length > 0) {
// 			basketPost.forEach((post) => {
// 				const [postId, quantityStr] = post.split('*2%2&7(7)5%5!1@2')
// 				const quantity = parseInt(quantityStr)
// 				basketSide.push({ id: postId, quantity })
// 			})
// 		}

// 		updateBasketState(posts, basketSide)
// 	}, [basketStore, posts])

// 	return (
// 		<>
// 			{posts.map((obj) => (
// 				<div className={styles.postsContainer}>
// 					<div className={styles.productBox}>
// 						<Image
// 							src={obj.src}
// 							alt={obj.description}
// 							width={222}
// 							height={222}
// 							className={styles.image}
// 						/>
// 						<div className={styles.productDetails}>
// 							<div className={styles.details}>
// 								<div className={styles.priceBox}>
// 									<p>{obj.price}</p>
// 								</div>
// 								<div className={styles.controlBox}>
// 									<MdAddCircle
// 										className={styles.inceriment}
// 										size={'3vh'}
// 										onClick={() => inceriment(obj._id)}
// 									/>
// 									<p className={styles.quantity}>{obj.inBasket}</p>
// 									<FaMinus
// 										className={styles.deceriment}
// 										size={'3vh'}
// 										onClick={() => deceroment(obj._id)}
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</>
// 	)
// }
// export default Product

import Image from 'next/image'
import styles from './index.module.css'
import { FaMinus } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
interface Post {
	_id: string
	title: string
	description: string
	price: number
	src: string
	count: number
}

const posts: Post[] = [
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
		count: 3,
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
		count: 2,
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
		count: 4,
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
		count: 1,
	},
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
		count: 5,
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
		count: 6,
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
		count: 7,
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
		count: 13,
	},
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
		count: 9,
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
		count: 8,
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
		count: 18,
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
		count: 22,
	},
]
const Product = () => {
	return (
		<>
			{posts.map((obj) => (
				<div className={styles.postsContainer}>
					<div className={styles.productBox}>
						<Image
							src={obj.src}
							alt={obj.description}
							width={222}
							height={222}
							className={styles.image}
						/>
						<div className={styles.productDetails}>
							<div className={styles.title}>
								<h4>{obj.title}</h4>
							</div>
							<div className={styles.details}>
								<div className={styles.priceBox}>
									<p>{obj.price}</p>
								</div>
								<div className={styles.controlBox}>
									<MdAddCircle
										className={styles.inceriment}
										size={'3vh'}
									/>
									<p className={styles.quantity}>{obj.count}</p>
									<FaMinus
										className={styles.deceriment}
										size={'3vh'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
export default Product
