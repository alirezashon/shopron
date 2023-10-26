/** @format */

import Image from 'next/image'
import styles from './index.module.css'
interface Post {
	_id: string
	title: string
	description: string
	price: number
	src: string
}

const posts: Post[] = [
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
	},
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
	},
	{
		_id: '6',
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		src: '/images/ali.jpg',
	},
	{
		_id: '5',
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		src: '/images/ali.jpg',
	},
	{
		_id: '4',
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		src: '/images/ali.jpg',
	},
	{
		_id: '3',
		title: 'Post 4',
		description: 'Description of Post 4',
		price: 40,
		src: '/images/ali.jpg',
	},
]
const Product = () => {
	return (
		<>
			<div className={styles.postsContainer}>
				{posts.map((obj) => (
					<div className={styles.productBox}>
						<div className={styles.productDetails}>
							<Image
								src={obj.src}
								alt={obj.description}
								width={222}
								height={222}
								className={styles.image}
							/>
							<div className={styles.details}>
								<div className={styles.priceBox}>
									<h1>{obj.title}</h1>
									<button className={styles.inceriment}>+</button>
									<h1 className={styles.quantity}>7</h1>
									<button className={styles.deceriment}>-</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default Product
