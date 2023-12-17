/** @format */

import { GetServerSideProps } from 'next'
import styles from './index.module.css'
import Carouselali from './Carouselali'
import PostBox from '../PostBox'
import SelectList from '@/Components/Form/SelectList'
import Image from 'next/image'

interface PostProps {
	post: {
		_id: string
		title: string
		src: string
		price: number
		category: string
		quantity: number
		description: string
		inBasket?: number
	}
}
const Details = (post: PostProps, children: any) => {
	return (
		<>
			{/* <PostBox posts={post}/> */}
			<div className={styles.screenBox}>
				<div className={styles.screenBody}>
					<div className={styles.screenIssueLogoBox}>
						<Image
							width={1111}
							height={1111}
							alt='post'
							className={styles.issueScreenLogo}
							src='/images/icon.png'
						/>
					</div>
					<div className={styles.container}>
						<div className={styles.carouselaliBox}>
							<Carouselali />
						</div>
						<div className={styles.detailsBox}>
							<div className={styles.textBox}>
								<p className={styles.text}>
									لورم ایپسوم کخب نه به مخلبرتر از عبدلی
								</p>
								<p className={styles.text}>
									جورم ایجسوم چخب تهسه مخبربداضازلدی
								</p>
								<p className={styles.text}>
									کورم ایکسوم فخس سرخسه سخبریس همضادزلی
									{/* لورم ایپسوم نه به خانه مدرسه عممامه نماده همسایه خودرو دارید */}
								</p>
							</div>
							<div className={styles.postBox}>
								<PostBox posts={[post.post]} />
							</div>
 							<SelectList />
						 
						</div>

						<div className={styles.bottomBox}>
							{Object.entries(post.post).map((key, value) => (
								<div
									className={styles.detailsRow}
									key={key[0]}>
									<span>{key} :</span>
									<span>{value}</span>
								</div>
							))}
 						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
	params,
}) => {
	const title = params?.id as string
	console.log(params)
	const res = await fetch(`http://localhost:3000/api/data/Post/Client/page`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			category: '@L$L%O%F#D%M^',
			title: title, // Updated to use the post title as ID
			authType: 'G&E!T*P^R$O#D$U^C@T*S',
		}),
	})
	const postData = await res.json()
	return {
		props: {
			post: postData.products, // Assuming your API response has a "products" field
		},
	}
}
export default Details
