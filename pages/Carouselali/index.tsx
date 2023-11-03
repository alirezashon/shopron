/** @format */

import { useEffect, useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
interface ImageStructure {
	src: string
}

const Carouselali = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [images, setImages] = useState<ImageStructure[]>([
		{ src: '/images/Gerdachala.webp' },
		{ src: '/images/jaraghalesquer.jpg' },
		{ src: '/images/Akbar.jpg' },
		{ src: '/images/Gerdachala.webp' },
		{ src: '/images/jaraghalesquer.jpg' },
		{ src: '/images/Akbar.jpg' },
		{ src: '/images/Gerdachala.webp' },
		{ src: '/images/jaraghalesquer.jpg' },
		{ src: '/images/Akbar.jpg' },
		{ src: '/images/Gerdachala.webp' },
		{ src: '/images/jaraghalesquer.jpg' },
		{ src: '/images/Akbar.jpg' },
	])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/api/data/Post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					products: '',
					category: '@L$L%O%F#D%M^',
					authType: 'G&E!T*P^R$O#D$U^C@T*S',
				}),
			})
			const data = await response.json()
			setImages(data.products)
			console.log(data)
		}
		// fetchData()
		const interval = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % images.length)
		}, 4444)
		return () => clearInterval(interval)
	}, [currentIndex, images])

	const handleImageClick = (index: number) => {
		setCurrentIndex(index)
	}

	const nextImage = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
	}

	const previousImage = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.carouselali}>
					<Image
						className={`${styles.image} ${styles.imageTransition}`}
						src={`${images[currentIndex].src}`}
						width={4444}
						height={4444}
						alt={'carousell'}
					/>
					<div className={styles.circaliBox}>
						{images.map((image, index) => (
							<span
								className={`${styles.circali} ${
									index === currentIndex ? styles.circalActive : ''
								}`}
								key={index}></span>
						))}
					</div>
					<div className={styles.toolBar}>
						<div
							className={styles.contorali}
							style={{
								width: `${100 / images.length}% `,
								marginLeft: `${(100 / images.length) * currentIndex}% `,
							}}></div>
					</div>
				</div>
			</div>
			<GrFormPreviousLink className={styles.directionsIcon} size={'7vh'} onClick={previousImage} color={'green'}/>
			<GrFormNextLink className={styles.directionsIcon} size={'7vh'} onClick={nextImage}/>
		</>
	)
}

export default Carouselali
