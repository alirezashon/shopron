/** @format */

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { FaMinus } from 'react-icons/fa'
import { Add, Remove } from '@/Components/Basket/Actions'
import { parse } from 'path'

interface Post {
	_id: string
	title: string
	src: string
	price: number
	category: string
	quantity: number
	description: string
}
interface BasketStore {
	id: string
	quantity: number
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	console.log('context')
// 	const res = await fetch('/api/data/Post/Client', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({
// 			category: '@L$L%O%F#D%M^',
// 			authType: 'G&E!T*P^R$O#D$U^C@T*S',
// 		}),
// 	})
// 	const callPosts = await res.json()
// 	const posts = callPosts.products
// 	console.log(posts)
// 	return { props: { posts } }
// }
/***                 Main Component                     ***/

// const PostBox = ({
// 	posts,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const posts = [
	{
		_id: '44ads',
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '7sdfgt',
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '44adsgalobdibordada',
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
]
const PostBox = () => {
	const [postStates, setPostStates] = useState<Post[]>(
		posts?.filter((post: Post) => ({
			post,
			isAddToBasket: false,
			quantity: 0,
		})) || []
	)
	const [basketStore, setBasketStore] = useState<BasketStore[]>([])
	const [isAddToBasket, setIsAddToBasket] = useState<boolean>(true)
	useEffect(() => {
		const basketCheck = () => {
			const basketPost: string[] = JSON.parse(
				localStorage.getItem('#B!@%$&K&E^T*O(s&') || '[]'
			)
			const basketSide: BasketStore[] = []

			if (basketPost.length > 0) {
				basketPost.forEach((post) => {
					const [id, quantityStr] = post.split('*2%2&7(7)5%5!1@2')
					const quantity = parseInt(quantityStr)
					basketSide.push({ id, quantity })
				})
			}

			if (basketSide.length > 0) {
				setBasketStore(basketSide)
				// setPostStates((prevPostStates) => {
				// 	const basketOut = prevPostStates.filter(
				// 		(post) => !basketSide.some((basket) => basket.id === post._id)
				// 	)
				// 	return basketOut
				// })
				const updatedPostStates = postStates.filter(
					(post) => !basketSide.some((basket) => basket.id === post._id)
					)
					
					setPostStates(updatedPostStates)
 				
			}
		}

		basketCheck()
	}, [setBasketStore,setPostStates])

	return (
		<div className={styles.postsBox}>
 			<div className={styles.innerPostsBox}>
				{postStates.map((obj: Post, index: number) => (
					<div
						className={styles.postBox}
						key={obj._id}>
						<div className={styles.innerPostBox}>
							<h6 className={styles.title}>{obj.title}</h6>
							<Image
								src={obj.src}
								alt={obj.description}
								width={2222}
								height={1111}
								className={styles.image}
							/>
							{isAddToBasket ? (
								<div className={styles.productDetails}>
									<div className={styles.details}>
										<div className={styles.priceBox}>
											<p>{obj.price}</p>
										</div>
										<div className={styles.controlBox}>
											<MdAddCircle
												className={styles.inceriment}
												size={'3vh'}
												onClick={() => Add(obj._id)}
											/>
											<p className={styles.quantity}>{obj.quantity}</p>
											<FaMinus
												className={styles.deceriment}
												size={'3vh'}
												onClick={() => Remove(obj._id)}
											/>
										</div>
									</div>
								</div>
							) : (
								<div className={styles.priceBasketBox}>
									<div className={styles.innerPriceBasketBox}>
										<div className={styles.priceBasket}>
											<div
												className={styles.icon}
												onClick={() => Add(obj._id)}>
												<AiOutlineShoppingCart
													size={'3vh'}
													color={'rgb(255,255,255)'}
												/>
											</div>
											<p className={styles.price}>{obj.price}</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PostBox
