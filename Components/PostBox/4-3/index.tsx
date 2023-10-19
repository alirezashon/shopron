/** @format */

import Image from 'next/image'
import styles from './index.module.css'
const PostBox = () => {
	const posts = [
		{
			_id: 6,
			title: 'Post 1',
			description: 'Description of Post 1',
			price: 10,
			src: '/128.jpg',
		},
		{
			_id: 5,
			title: 'Post 2',
			description: 'Description of Post 2',
			price: 20,
			src: '/124.jpg',
		},
		{
			_id: 4,
			title: 'Post 3',
			description: 'Description of Post 3',
			price: 30,
			src: '/123.jpg',
		},
		{
			_id: 4,
			title: 'Post 3',
			description: 'Description of Post 3',
			price: 30,
			src: '/123.jpg',
		},
	]
	return (
		<>
			<div className={styles.postsBox}>
				<div className={styles.innerPostsBox}>
					{posts.map((obj) => (
						<div
							className={styles.postBox}
							key={obj._id}>
							<div className={styles.innerPostBox}>
								<h6>{obj.title}</h6>
								<Image
									src={obj.src}
									alt={obj.description}
									width={200}
                                    height={200}
                                    className={styles.image}
								/>
								<div className={styles.priceBasketBox}>
                                    <div className={styles.innerPriceBasketBox}>
                                        <p>{obj.price}</p>
                                        <div>+</div>
                                    </div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
export default PostBox
