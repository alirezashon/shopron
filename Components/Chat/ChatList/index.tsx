/** @format */

import Image from 'next/legacy/image'
import { useState, useEffect } from 'react'
interface Chat {
	name: string
	messages: string
	hashTag: string
}

interface ChatListProps {
	sender: Chat
}

const ChatList: React.FC<ChatListProps> = ({ sender }) => {
	return (
		<>
			<div
				key={sender.name}
				style={styles.senderBox}>
				<div style={styles.imageContainer}>
					<Image
						alt={sender.name}
						src={`https://picsum.photos/80/80?random=${Math.random()}`} // Using Picsum API for random images
						width={80}
						height={80}
						style={{borderRadius:'7vh'}}
					/>
				</div>
				<div style={styles.senderInfo}>
					<div style={styles.senderName}>{sender.name}</div>
 					<div style={styles.lastMessage}>
						{sender.messages[sender.messages.length - 1]}
					</div>
				</div>
			</div>
		</>
	)
}

export default ChatList
const styles: { [key: string]: React.CSSProperties } = {
	senderBox: {
		width: '95%',
		height: '10vh',
		display: 'flex',
		alignItems: 'center',
		padding: '1vh',
		border: '.4vh ridge #ffffff',
		margin: '1vh',
	},
	imageContainer: {
		height: '7vh',
		width: '7vh',
		marginRight: '1vh',
	},
 
	senderInfo: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		fontSize:'2vh',
	},
	senderName: {
		fontWeight: 'bold',
		fontSize: '16px',
	},
	lastMessage: {
		textAlign: 'center',
		marginTop: '5px',
	},
}
