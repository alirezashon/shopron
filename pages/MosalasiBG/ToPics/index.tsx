/** @format */

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './index.module.css'
interface Topics {
	title: string
	src: string
	price: string
	category: string
	description: string
}
const ToPics = () => {
	const [topics, setTopics] = useState<Topics[]>([])
	const fetchData = async () => {
		const response = await fetch('api/data/Post', {
			method: 'POST',
			headers: { ContentType: 'application/json' },
			body: JSON.stringify({
				category: '^G!e@T#T$o%P!I@c$',
				authType: 'G&E!T*P^R$O#D$U^C@T*S',
			}),
		})
		const data = await response.json()
		setTopics(data.products)
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<>
			<div className={styles.container}>
				{topics.map((topic) => (
					<div className={styles.container}>
						<Image
							className={styles.topic}
							src={topic.src}
							alt={topic.title}
							width={2222}
							height={2222}
						/>
						<div className={styles.description}>
							<h1 className={styles.description}>{topic.description}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default ToPics