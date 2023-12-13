/** @format */

import React, { useState, useEffect, CSSProperties } from 'react'
import MessageList from './ChatBox/MessageList'
import MessageInput from './ChatBox/MessageInput'
import ChatList from './ChatList'
interface Styles {
	container: CSSProperties
	chatList: CSSProperties
	privateChat: CSSProperties
	messageBox: CSSProperties
	chatBox: CSSProperties
}
const Chatroom: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([])

	const addMessage = (message: string) => {
		setMessages([...messages, message])
	}

	const createConnection = async (user: string) => {
		const response = await fetch('/api/chatroom', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authType: '', user }),
		})
		const data = await response.json()
		console.log(data)
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user') || '')
		createConnection(user)
	}, [])

	return (
		<div style={styles.container}>
			<div style={styles.chatBox}>
				<div style={styles.privateChat}>
					<MessageList messages={messages} />
				</div>
				<div style={styles.messageBox}>
					<MessageInput onSendMessage={addMessage} />
				</div>
			</div>
			<div style={styles.chatList}>
				<ChatList />
			</div>
		</div>
	)
}
export default Chatroom

const styles: Styles = {
	container: {
		width: '100%',
		height: '100vh',
		backgroundColor: 'whitesmoke',
		display: 'flex',
	},
	chatList: {
		width: '33%',
		backgroundColor: 'yellowgreen',
	},
	chatBox: {
		width: '67%',
	},
	privateChat: {},
	messageBox: {
		
	},
}
