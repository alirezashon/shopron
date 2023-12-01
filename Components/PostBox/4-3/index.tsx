/** @format */

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { FaMinus } from 'react-icons/fa'
import { Add, Remove } from '@/Components/Basket/Actions'
import styles from './index.module.css'
import { useRouter } from 'next/router'
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
interface BasketStore {
	id: string
	count: number
}
interface PostsDisplayProps {
	posts: Post[]
}
const index: React.FC<PostsDisplayProps> = ({ posts }) => {
	const [postStates, setPostStates] = useState<Post[]>(posts)
	const [basketStore, setBasketStore] = useState<string[]>([])
	const [isMobile, setIsMobile] = useState<boolean>(true)
	const [lazyOnScroll, setLazyOnScroll] = useState<number>(0)
	const router = useRouter()
	const updateBasketState = (posts: Post[], basketItems: BasketStore[]) => {
		const updatedPosts = posts?.map((post) => {
			const matchingItem = basketItems.find((item) => item.id === post._id)

			return {
				...post,
				inBasket: matchingItem ? matchingItem.count : 0,
			}
		})

		setPostStates(updatedPosts)
	}

	const inceriment = (id: string) => {
		Add(id)
		setBasketStore((prev) => [...prev, id])
	}

	const deceroment = (id: string) => {
		Remove(id)
		setBasketStore((prev) => [...prev, id])
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrollPart = window.scrollY / window.innerHeight
			setLazyOnScroll(parseInt(scrollPart.toFixed(), 10))
		})

		const basketPost: string[] = JSON.parse(
			localStorage.getItem('#B!@%$&K&E^T*O(s&') || '[]'
		)
		const basketSide: BasketStore[] = []

		if (basketPost.length > 0) {
			basketPost.forEach((post) => {
				const [postId, quantityStr] = post.split('*2%2&7(7)5%5!1@2')
				const count = parseInt(quantityStr)
				basketSide.push({ id: postId, count })
			})
		}
		updateBasketState(posts, basketSide)
		if (window.innerWidth > 777) {
			setIsMobile(false)
		}
	}, [basketStore, posts, setIsMobile])

	return (
		<div className={styles.postsBox}>
			<div className={styles.innerPostsBox}>
				{postStates
					.slice(0, isMobile ? 6 * (lazyOnScroll + 2) : 12 * (lazyOnScroll + 2))
					.map((obj, index: number) => (
						<div
							className={styles.postBox}
							key={obj._id}>
							{isMobile}
							<h6 className={styles.title}>{obj.title}</h6>
							<div className={styles.innerPostBox}>
								<div className={styles.imageBox}>
									<Image
										src={obj.src}
										alt={obj.description}
										width={200}
										height={200}
										className={styles.image}
										onClick={() =>
											window.open(`http://localhost:3000/Post/${obj.title}`)
										}
										// onClick={() =>
										// 	router.push(`http://localhost:3000/Post/${obj.title}`)
										// }
									/>
								</div>

								{obj.inBasket && obj.inBasket > 0 ? (
									<div className={styles.productDetails}>
										<div className={styles.details}>
											<div className={styles.priceBox}>
												<p>مجموع {obj.price * obj.inBasket}</p>
											</div>
											<div className={styles.controlBox}>
												<MdAddCircle
													className={styles.inceriment}
													style={{
														opacity:
															obj.inBasket && obj.inBasket === obj.quantity
																? 0.1
																: 1,
													}}
													size={'3vh'}
													onClick={() =>
														obj.inBasket && obj.inBasket < obj.quantity
															? inceriment(obj._id)
															: ''
													}
												/>
												<p className={styles.count}>{obj.inBasket}</p>
												<FaMinus
													className={styles.deceriment}
													size={'3vh'}
													onClick={() => deceroment(obj._id)}
												/>
											</div>
										</div>
									</div>
								) : (
									<div className={styles.innerPriceBasketBox}>
										<div
											className={styles.priceBasket}
											onClick={() => inceriment(obj._id)}>
											<div className={styles.iconBox}>
												<AiOutlineShoppingCart
													size={'5vh'}
													color={'rgb(255,255,255)'}
													className={styles.icon}
												/>
												<p className={styles.quantity}>{obj.quantity}</p>
											</div>
											<a className={styles.price}> {obj.price} تومان </a>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	)
	// return (
	// 	<div className={styles.postsBox}>
	// 		<div className={styles.innerPostsBox}>
	// 			{postStates?.map((obj: Post, index: number) => (
	// 				<div
	// 					className={styles.postBox}
	// 					key={obj._id}>
	// 					<div className={styles.innerPostBox}>
	// 						<h6 className={styles.title}>{obj.title}</h6>
	// 						<Image
	// 							src={obj.src}
	// 							alt={obj.description}
	// 							width={1111}
	// 							height={1111}
	// 							className={styles.image}
	// 							onClick={() =>
	// 								router.push(`http://localhost:3000/Post/${obj.title}`)
	// 							}
	// 							priority
	// 						/>
	// {obj.inBasket && obj.inBasket > 0 ? (
	// 	<div className={styles.productDetails}>
	// 		<div className={styles.details}>
	// 			<div className={styles.priceBox}>
	// 				<p>{obj.price}</p>
	// 			</div>
	// 			<div className={styles.controlBox}>
	// 				<MdAddCircle
	// 					className={styles.inceriment}
	// 					size={'3vh'}
	// 					onClick={() => inceriment(obj._id)}
	// 				/>
	// 				<p className={styles.quantity}>{obj.inBasket}</p>
	// 				<FaMinus
	// 					className={styles.deceriment}
	// 					size={'3vh'}
	// 					onClick={() => deceroment(obj._id)}
	// 				/>
	// 			</div>
	// 		</div>
	// 	</div>
	// ) : (
	// 	<div className={styles.priceBasketBox}>
	// 		<div className={styles.innerPriceBasketBox}>
	// 			<div className={styles.priceBasket}>
	// 				<div
	// 					className={styles.icon}
	// 					onClick={() => inceriment(obj._id)}>
	// 					<AiOutlineShoppingCart
	// 						size={'3vh'}
	// 						color={'rgb(255,255,255)'}
	// 					/>
	// 				</div>
	// 				<p className={styles.price}>{obj.price}</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// )}
	// 					</div>
	// 				</div>
	// 			))}
	// 		</div>
	// 	</div>
	// )
}

export default index
