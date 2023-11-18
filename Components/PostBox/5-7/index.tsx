/** @format */
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { FaMinus } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { Add, Remove } from '../../Basket/Actions'
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
	quantity: number
}
interface PostDisplayProps {
	posts: Post[]
}
const PostBox: React.FC<PostDisplayProps> = ({ posts }) => {
	const [postStates, setPostStates] = useState<Post[]>(
		posts?.filter((post: Post) => ({
			post,
			inBasket: 0,
		})) || []
	)
	const [basketStore, setBasketStore] = useState<string[]>([])
	const router = useRouter()

	const updateBasketState = (posts: Post[], basketItems: BasketStore[]) => {
		const updatedPosts = posts.map((post) => {
			const matchingItem = basketItems.find((item) => item.id === post._id)

			return {
				...post,
				inBasket: matchingItem ? matchingItem.quantity : 0,
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
		const basketPost: string[] = JSON.parse(
			localStorage.getItem('#B!@%$&K&E^T*O(s&') || '[]'
		)
		const basketSide: BasketStore[] = []

		if (basketPost.length > 0) {
			basketPost.forEach((post) => {
				const [postId, quantityStr] = post.split('*2%2&7(7)5%5!1@2')
				const quantity = parseInt(quantityStr)
				basketSide.push({ id: postId, quantity })
			})
		}

		updateBasketState(posts, basketSide)
	}, [basketStore, posts])

	return (
		<div className={styles.container}>
			{postStates.map((obj) => (
				<div
					key={obj._id}
					className={styles.card}>
					<h3 className={styles.title}>{obj.title}</h3>
					<Image
						className={styles.photo}
						src={obj.src}
						alt={obj.title}
						width={11111}
						height={1111}
						onClick={() =>
							router.push(
								`http://localhost:3000/Post/${encodeURIComponent(obj.title)}`
							)
						}
						priority
					/>

					{obj.inBasket && obj.inBasket > 0 ? (
						<div className={styles.productDetails}>
							<div className={styles.details}>
								<div className={styles.priceBox}>
									<p>{obj.price}</p>
								</div>
								<div className={styles.controlBox}>
									<MdAddCircle
										className={styles.inceriment}
										size={'3vh'}
										onClick={() => inceriment(obj._id)}
									/>
									<p className={styles.quantity}>{obj.inBasket}</p>
									<FaMinus
										className={styles.deceriment}
										size={'3vh'}
										onClick={() => deceroment(obj._id)}
									/>
								</div>
							</div>
						</div>
					) : (
						<>
							<p className={styles.price}>{`${obj.price}`}</p>
							<AiOutlineShoppingCart
								size={'6vh'}
								color={'rgb(255,255,255)'}
								className={styles.basketBall}
							/>
						</>
					)}
				</div>
			))}
		</div>
	)
}

export default PostBox
