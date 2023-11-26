/** @format */

import { GetServerSideProps } from 'next'
import styles from './index.module.css'
import Carouselali from './Carouselali'
import PostBox from '../PostBox'
import SelectList from '@/Components/Form/SelectList'
import CheckBox from '@/Components/Form/CheckBox'
import Radio from '@/Components/Form/Radio'
import Chips from '../../../Components/Form/Chips'
import TextArea from '@/Components/Form/TextArea'
import Switch from '@/Components/Form/Switch'
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
						<img
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
								<p className={styles.text}>لورم ایپسوم نبخ اسخ چجح ذر استنا</p>
								<p className={styles.text}>
									لورم ایپسوم نه به خانه مدرسه عممامه نماده همسایه خودرو دارید
								</p>
							</div>
							<div className={styles.postBox}>
								<PostBox posts={[post.post]} />
							</div>
							<Radio />
							<SelectList />
							<Switch />
							<Chips />
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
							<CheckBox /> <TextArea />
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
