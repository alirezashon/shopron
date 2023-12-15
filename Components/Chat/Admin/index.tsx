/** @format */

import React, { useState, useEffect, CSSProperties } from 'react'
import MessageList from './ChatBox/MessageList'
import MessageInput from './ChatBox/MessageInput'
import ChatList from './ChatList'
import { FcCustomerSupport } from 'react-icons/fc'

interface Styles {
	container: CSSProperties
	chatList: CSSProperties
	privateChat: CSSProperties
	messageBox: CSSProperties
	chatBox: CSSProperties
	drawer: CSSProperties
}
interface Chat {
	name: string
	messages: string
	hashTag: string
}
const Chatroom: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([])
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [chatList, setChatList] = useState<Chat[]>([])
	const addMessage = (message: string) => {
		setMessages([...messages, message])
	}

	const getChats = async () => {
		const response = await fetch('/api/chat/Admin/GET', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authType: '!C#o$N%e^C&t*O$C#h$t%' }),
		})
		const data = await response.json()
		console.log(data)
		console.log(response)
		response.status === 200 ? setChatList(data.senders) : ''
	}
	useEffect(() => {
		getChats()
	}, [])

	return (
		<div style={styles.container}>
			<FcCustomerSupport />
			<div style={styles.chatBox}>
				<div style={styles.privateChat}>
					<MessageList messages={messages} />
				</div>
				<div style={styles.messageBox}>
					<MessageInput onSendMessage={addMessage} />
				</div>
			</div>
			{/* <div style={styles.chatList}>
				{chatList.map((chat, index) => (
					<ChatList
						key={index}
						sender={chat}
					/>
				))}
			</div> */}
			<div style={{ ...styles.drawer, width: isDrawerOpen ? '300px' : '0px' }}>
				{isDrawerOpen && (
					<div>
						{chatList.map((chat, index) => (
							<ChatList
								key={index}
								sender={chat}
							/>
						))}
					</div>
				)}
			</div>
			<button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
				Toggle Drawer
			</button>
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
	drawer: {
		overflow: 'hidden',
		transition: 'width 0.3s ease-in-out', // Add transition for smooth animation
	},
	chatList: {
		display: 'flex',
		flexDirection: 'column',
		border: '1vh yellow Ridge',
		width: '33%',

		backgroundColor: 'yellowgreen',
	},
	chatBox: {
		transition: 'width 0.3s ease-in-out', // Add transition for smooth animation
		width: '67%',
	},
	privateChat: {},
	messageBox: {},
}
