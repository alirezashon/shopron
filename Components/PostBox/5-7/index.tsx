/** @format */
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { FaMinus } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { Add, Remove } from '../../Basket/Actions'

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
		title: 'شاملکه',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'خدایا بینهایت مرتبه شکرت که مارو هر لحظه به هم نزدیک تر میکنی',
	},
	{
		_id: '7sdfgt',
		title: 'شاملکه',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description: 'خدایا بینهایت مرتبه شکرت که هر لحظه ملکه ملیکامو حفظ میکنی',
	},
	{
		_id: '44adsgalobdibordada',
		title: 'شاملکه',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description: 'خدایا بینهایت مرتبه شکرت که هر لحظه ما بیشتر عاشق هم میشیم',
	},
]
const PostBox = () => {
	const [postStates, setPostStates] = useState<Post[]>(
		posts?.filter((post: Post) => ({
			post,
			inBasket: 0,
		})) || []
	)
	const [basketStore, setBasketStore] = useState<string[]>([])

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
