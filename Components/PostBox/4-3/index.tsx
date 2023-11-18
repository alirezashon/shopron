/** @format */

// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { FaMinus } from 'react-icons/fa'
import { Add, Remove } from '@/Components/Basket/Actions'
import styles from './index.module.css'
interface HomeProps {
	posts: [
		{
			_id: string
			title: string
			src: string
			price: number
			category: string
			quantity: number
			description: string
			inBasket?: number
		}
	]
}
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
const index: NextPage<HomeProps> = ({ posts }) => {
	const [postStates, setPostStates] = useState<Post[]>(
		posts?.filter((post: Post) => ({
			post,
			inBasket:0
		})) || []
	)
	const [basketStore, setBasketStore] = useState<string[]>([])

	const updateBasketState = (posts: Post[], basketItems: BasketStore[]) => {
		const updatedPosts = posts?.map((post) => {
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
		<div className={styles.postsBox}>
			<div className={styles.innerPostsBox}>
				{postStates?.map((obj: Post, index: number) => (
					<div
						className={styles.postBox}
						key={obj._id}>
						<div className={styles.innerPostBox}>
							<h6 className={styles.title}>{obj.title}</h6>
							<Image
								src={obj.src}
								alt={obj.description}
								width={1111}
								height={1111}
								className={styles.image}
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
								<div className={styles.priceBasketBox}>
									<div className={styles.innerPriceBasketBox}>
										<div className={styles.priceBasket}>
											<div
												className={styles.icon}
												onClick={() => inceriment(obj._id)}>
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	// Replace this with your logic to fetch posts from an external API
	const res = await fetch('http://localhost:3000/api/data/Post/Client', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			category: '@L$L%O%F#D%M^',
			authType: 'G&E!T*P^R$O#D$U^C@T*S',
		}),
	})
	const callPosts = await res.json()
	const posts = callPosts.products
	console.log('posts')
	// const posts: HomeProps['posts'] = await response.json()

	return {
		props: {
			posts,
		},
	}
}

export default index
