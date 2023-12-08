import { CSSProperties } from 'react'
import Image from 'next/image'
 import { FaMinus } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import React from 'react'
interface Post {
	_id: string
	title: string 
	src: string
	price: number
	category: string
	quantity: number
	description: string
}
interface PostProps {
	posts: Post[]
}
interface ProductStyles {
	postsContainer: CSSProperties
	postsContainerHover: CSSProperties
	productBox: CSSProperties
	image: CSSProperties
	imageHover: CSSProperties
	productDetails: CSSProperties
	title: CSSProperties
	details: CSSProperties
	priceBox: CSSProperties
	controlBox: CSSProperties
	quantity: CSSProperties
	inceriment: CSSProperties
	deceriment: CSSProperties
	incerimentHover: CSSProperties
	decerimentHover: CSSProperties
}

const Product: React.FC<PostProps> = ({ posts }) => {
	return (
		<>
			{posts.map((obj) => (
				<div
                    style={styles.postsContainer}
					key={obj._id}>
					<div style={styles.productBox}>
						<Image
							src={obj.src}
							alt={obj.description}
							width={222}
							height={222}
							style={styles.image}
						/>
						<div style={styles.productDetails}>
							<div style={styles.title}>
								<h4>{obj.title}</h4>
							</div>
							<div style={styles.details}>
								<div style={styles.priceBox}>
									<p>{obj.price}</p>
								</div>
								<div style={styles.controlBox}>
									<MdAddCircle
										style={styles.inceriment}
										size={'3vh'}
									/>
									<p style={styles.quantity}>{obj.quantity}</p>
									<FaMinus
										style={styles.deceriment}
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

const styles : ProductStyles = {
	postsContainer: {
		border: 'ridge 1vh #9bc9f7',
		boxShadow: '1px 1px 4px 1px rgba(11, 97, 127, 0.9)',
		padding: '1vh',
		margin: '1vh 0vh',
		borderRadius: '1vh',
		height: '22vh',
		cursor: 'pointer',
		transition: 'transform 0.7s',
	},
	postsContainerHover: {
		zIndex: 1,
		border: '0.7vh double rgba(233, 248, 24, 0.7)',
		transform: 'translate(-1vh, -1vh)',
	},
	productBox: {
		width: '100%',
		height: '100%',
		backgroundColor: '#ffffff',
		padding: '1vh',
		border: 'double 0.4vh rgb(2, 135, 172)',
		display: 'flex',
		justifyContent: 'space-around',
		boxShadow:
			'inset 1px 1px 7px 1px rgba(44, 66, 99, 0.9), 1px 1px 2px 1px rgba(17, 75, 160, 0.9)',
		background:
			'radial-gradient(rgba(144, 230, 208, 0.9), rgba(255, 254, 235, 0.8), rgba(255, 255, 255, 0.9))',
	},
	image: {
		width: '26%',
		height: '100%',
		border: 'double 0.7vh rgb(64, 129, 203)',
		borderRadius: '1vh',
		boxShadow: '1px 1px 1px 1px rgba(44, 66, 99, 0.9)',
		transition: 'transform 0.7s ease-in',
	},
	imageHover: {
		transform: 'translateY(1vh)',
		boxShadow: '1px 1px 7px 1px rgba(11, 97, 127, 0.9)',
	},
	productDetails: {
		width: '65%',
		border: 'double rgba(44, 66, 99, 0.9) 0.4vh',
		boxShadow:
			'1px 1px 4px 1px rgba(28, 94, 122, 0.9), 1px 1px 1px 1px rgba(11, 97, 227, 0.9) inset',
		borderRadius: '1vh',
		padding: '1vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		marginBottom: '1vh',
		background: 'radial-gradient(rgb(213, 247, 243), rgb(171, 216, 209))',
		textAlign: 'center',
		width: 'fit-content',
		padding: '0vh 11vh',
		border: 'dotted .22vh rgba(11, 97, 127, 0.9)',
		borderRadius: '1vh',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '50%',
		alignItems: 'center',
		borderRadius: '13vh',
	},
	priceBox: {
		background: 'linear-gradient(44deg, rgb(5, 76, 79), rgb(77, 179, 222))',
		border: '0.5vh double rgb(250, 254, 255)',
		borderRadius: '2vh',
		marginBottom: '-.1vh',
		textAlign: 'center',
		width: '60%',
	},
	controlBox: {
		border: 'double 0.5vh rgba(12, 66, 103, 0.6)',
		background: 'radial-gradient(rgb(164, 236, 220), rgb(121, 211, 202))',
		borderRadius: '4vh',
		width: '81%',
		height: '5vh',
		display: 'flex',
		justifyContent: 'space-between',
	},
	quantity: {
		width: '100%',
		textAlign: 'center',
		borderRadius: '4vh',
		color: 'rgba(255, 255, 255, 1)',
		background:
			'linear-gradient(90deg,rgb(188, 244, 248), rgb(20, 135, 250), rgb(188, 244, 248))',
	},
	inceriment: {
		borderRadius: '2vh',
		width: '20%',
		display: 'block',
		textAlign: 'center',
		height: '100%',
		color: 'rgb(255, 255, 255)',
		background: 'linear-gradient(44deg, rgb(10, 44, 78), rgb(12, 81, 88))',
		transition: 'transform .5s',
	},
	deceriment: {
		borderRadius: '2vh',
		width: '20%',
		display: 'block',
		textAlign: 'center',
		height: '100%',
		color: 'rgb(255, 255, 255)',
		background: 'linear-gradient(44deg, rgb(252, 85, 34), rgb(222, 145, 77))',
		transition: 'transform .7s',
	},
	incerimentHover: {
		transform: 'rotate(139deg)',
	},
	decerimentHover: {
		transform: 'rotate(139deg)',
	},
}
