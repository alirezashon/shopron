/** @format */

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
 										<MdAddCircle className={styles.inceriment}
											size={'3vh'} />
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
