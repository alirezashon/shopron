/** @format */
import { AiFillCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {Add} from'../Basket/Actions'
import styles from './index.module.css'
interface Story {
	_id: string
	title: string
	src: string
	price: number
	category: string
	quantity: number
	description: string
	seen?: boolean
}
const data = [
	{
		_id: '44ads',
		title: 'EBiramoza',
		src: '/images/ali.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '7sdfgt',
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '44adsgalobdibordada',
		title: 'EBiramoza',
		src: '/images/Akbar.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '44ads',
		title: 'EBiramoza',
		src: '/images/ali.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '7sdfgt',
		title: 'EBiramoza',
		src: '/images/alireza.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
	{
		_id: '44adsgalobdibordada',
		title: 'EBiramoza',
		src: '/images/Akbar.jpg',
		price: 7777777,
		category: 'P&O*S^T$I%T#E^M$',
		quantity: 22,
		description:
			'this post just created for happy freedome to al.akbarporJojegan',
	},
]
const StoryComponent = () => {
	const [openStory, setOpenStory] = useState<string>()
	const [showStoryBox, setShowStoryBox] = useState(false)
	const [stories, setStories] = useState<Story[]>(
		data?.filter((story: Story) => ({
			story,
			seen: false,
		})) || []
	)

	useEffect(() => {
		const storyHistory: string[] = JSON.parse(
			sessionStorage.getItem('^S&T#o@r%i($*i&N0') || '[]'
		)
		const setSeen: Story[] = []
		stories.map((story) => {
			const seen = storyHistory.find((item) => story._id === item)
				? true
				: false
			setSeen.push({
				...story,
				seen,
			})
		}) || []
		setStories(setSeen)
	}, [])
	const showStory = (_id: string) => {
		const storyHistory: string[] = JSON.parse(
			sessionStorage.getItem('^S&T#o@r%i($*i&N0') || '[]'
		)
		storyHistory.push(_id)
		const unique = storyHistory.filter((post, index, self) => {
			return self.indexOf(post) === index
		})
		sessionStorage.setItem('^S&T#o@r%i($*i&N0', JSON.stringify(unique))
		const setSeen: Story[] = []
		stories.map((story) => {
			const seen = storyHistory.find((item) => story._id === item)
				? true
				: false
			setSeen.push({
				...story,
				seen,
			})
		}) || []
		setStories(setSeen)
		setOpenStory(_id)
		setShowStoryBox(true)

		setTimeout(() => {
			setShowStoryBox(false)
			setOpenStory((prevIndex) => prevIndex && prevIndex + 1)
		}, 70000)
	}
	const closeStory = () => {
		setShowStoryBox(false)
	}

	return (
		<>
			<div className={styles.storyBox}>
				{stories.map((story, index) => (
					<div key={story._id}>
						<div
							className={styles.story}
							style={{
								border: `2px solid ${
									openStory === story._id
										? '#dfd688'
										: story.seen
										? 'silver'
										: 'gold'
								}`,
							}}
							onClick={() => showStory(story._id)}>
							<Image
								width={1111}
								height={1111}
								src={story.src}
								alt={`Story ${index + 1}`}
								className={styles.storyBanner}
							/>
						</div>
					</div>
				))}
			</div>
			{showStoryBox && (
				<div className={styles.openStoryContainer}>
					<div className={styles.openStoryInnerSide}>
						{stories.map((story) => (
							<div className={styles.openStoryBox}>
								<div className={styles.openStoryHeader}>
									<AiFillCloseCircle
										className={styles.close}
										onClick={closeStory}
										color={'white'}
										size={'5vh'}
									/>
									<h3 className={styles.title}>{story.title}</h3>
									<AiOutlineShoppingCart
										className={styles.basketBall}
										color={'white'}
										size={'5vh'}
										onClick={() => Add(story._id)}
									/>
								</div>
								<div className={styles.openStory}>
									<Image
										width={1111}
										height={1111}
										src={story.src}
										alt={story.title || story.description}
										className={styles.storyShowImage}
									/>
									<h6>{story.description}</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default StoryComponent
