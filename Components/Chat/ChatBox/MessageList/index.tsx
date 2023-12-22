/** @format */

// components/MessageList.js
import React from 'react'
import Image from 'next/image'
interface Props {
	messages: string[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
	return (
		<>
			<div style={styles.messageBox}>
				{messages.map((message, index) => (
					<>
						<div style={styles.messageContainer}>
							{index === 0 && (
								<div style={styles.imageContainer}>
									<Image
										alt={'sender.name'}
										src={`https://picsum.photos/80/80?random=${Math.random()}`} // Using Picsum API for random images
										width={700}
										height={700}
										layout='responsive'
										style={styles.image}
									/>
								</div>
							)}
							<p
								style={{
									...styles.message,
									marginLeft: index === 0 ? '1vh' : '7vh', // Add margin only for the first message
								}}
								key={index}>
								{message}
							</p>
						</div>
					</>
				))}
			</div>
		</>
	)
}

export default MessageList

const styles = {
	messageBox: {
		display: 'block',
		width: '100%',
		height: '100%',
		// overflowY:'auto',
		background:
			'linear-gradient(7deg,rgba(144,177,221,.9),rgba(222,244,166,.9))',
		padding: '1vh',
	},
	messageContainer: {
		display: 'flex',
	},
	message: {
		background:
			'linear-gradient(0deg,rgba(222,241,191,.2),rgba(252, 246, 255,.9))',
		border: '.4vh dashed rgba(21,99,222,.9)',
		borderRadius: '1vh',
		width: 'fit-content',
		padding: '.2vh 1vh',
		margin: '1vh',
	},
	imageContainer: {
		height: '7vh',
		width: '7vh',
		marginRight: '1vh',
	},
	image: {
		width: '10%',
		height: '10%',
		borderRadius: '7vh',
	},
}
