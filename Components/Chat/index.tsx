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
	const [sender, setSender] = useState<string>('')
	const addMessage = (message: string) => {
		setMessages([...messages, message])
		const setMessage = async () => {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					authType: '&M%e$A#g$e#I%n&Z*',
					text: message,
					sender: sender.length > 0 ? sender : 'new-user',
				}),
			})
			const data = await response.json()
			if (data.chatID && data.chatID.length > 0) {
				localStorage.setItem('#C!@%T$I&d&E^T*O^', data.chatID)
			}
			console.log('data')
			console.log(response)
		}
		setMessage()
	}

	const getChats = async () => {
		const response = await fetch('/api/chat/GET', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authType: '!C#o$N%e^C&t*O$C#h$t%' }),
		})
		const data = await response.json()
		response.status === 200 ? setChatList(data.senders) : ''
	}
	useEffect(() => {
		const chatId: string = 
			localStorage.getItem('#C!@%T$I&d&E^T*O^') || ''
		
		chatId.length > 0 && setSender(chatId)
		getChats()
	}, [setSender])

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
		height: '100%',
		background:
			'linear-gradient(4deg,rgba(29,93,129.9),rgba(247,247,247,.9),rgba(90,123,230,.9))',
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
	privateChat: {
		height: '85%',
	},
	messageBox: {},
}
