/** @format */
import { AiFillCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import Styles from './index.module.css'
const StoryComponent = () => {
	const [activeStoryIndex, setActiveStoryIndex] = useState<number>()
	const [showStoryBox, setShowStoryBox] = useState(false)
	const [storySeen, setStorySeen] = useState(false)
	const stories = [
		{
			id: 1,
			src: '/images/feshki.webp'
		},
		{
			id: 2,
			src: '/images/feshki.webp'
		},
		{
			id: 3,
			src: '/images/feshki.webp'
		},
		{
			id: 4,
			src: '/images/feshki.webp'
		},
		{
			id: 5,
			src: '/images/feshki.webp'
		},
		{
			id: 6,
			src: '/images/feshki.webp'
		},
		{
			id: 7,
			src: '/images/feshki.webp'
		},
		{
			id: 8,
			src: '/images/feshki.webp'
		},
		{
			id: 9,
			src: '/images/feshki.webp'
		},
		{
			id: 10,
			src: '/images/feshki.webp'
		},
		{
			id: 11,
			src: '/images/feshki.webp'
		},
		{
			id: 12,
			src: '/images/feshki.webp'
		},
		{
			id: 13,
			src: '/images/feshki.webp'
		},
		{
			id: 14,
			src: '/images/feshki.webp'
		},
		{
			id: 15,
			src: '/images/feshki.webp'
		},
		{
			id: 16,
			src: '/images/feshki.webp'
		},
		{
			id: 17,
			src: '/images/feshki.webp'
		},
		{
			id: 18,
			src: '/images/feshki.webp'
		},
		{
			id: 19,
			src: '/images/feshki.webp'
		},
		{
			id: 20,
			src: '/images/feshki.webp'
		},
	]

	const handleStoryClick = (index:number) => {
		setActiveStoryIndex(index)
		setShowStoryBox(true)

		setTimeout(() => {
			setShowStoryBox(false)
			setStorySeen(true)
			setActiveStoryIndex((prevIndex) => prevIndex && prevIndex + 1)
		}, 7000)
	}
	const closeStory = () => {
		setShowStoryBox(false)
	}

	return (
		<>
			<div></div>
			<div className={Styles.storyBox}>
				{stories.map((story, index) => (
					<div key={story.id}>
						<div
							className={Styles.story}
							style={{
								border: `2px solid ${
									activeStoryIndex === index
										? '#dfd688'
										: storySeen
										? 'silver'
										: 'gold'
								}`,
							}}
							onClick={() => handleStoryClick(index)}>
							<Image
								width={99}
								height={99}
								src={story.src}
								alt={`Story ${index + 1}`}
								className={Styles.storyBanner}
							/>
						</div>
					</div>
				))}
			</div>
			{showStoryBox && (
				<div className={Styles.showStoryBox}>
					<span className={Styles.closeBtn}>
						<AiFillCloseCircle
							onClick={closeStory}
							color={'gold'}
							size={22}
						/>
					</span>
					<Image
						width={2000}
						height={1000}
						layout='responsive'
						src={stories[activeStoryIndex ?? 0].src}
						alt={`Story ${activeStoryIndex ?? 0 + 1}`}
						className={Styles.storyShowImage}
					/>
				</div>
			)}
		</>
	)
}

export default StoryComponent
