/** @format */

import { useState, useEffect } from 'react'

interface Chat {
	name: string
	messages: string
	hashTag: string
}
const ChatList: React.FC = () => {
	const [chatList, setChatList] = useState<Chat[]>([
		{
			name: 'testosto',
			messages: 'testosto',
			hashTag: 'testosto',
		},
	])
	const getChats = async () => {
		const response = await fetch('/api/chat/Admin/GET', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authType: '!C#o$N%e^C&t*O$C#h$t%' }),
		})
		const data = await response.json()
		console.log(data)
		response.status === 200
			? setChatList([
					{ name: 'testosto', messages: 'testosto', hashTag: 'testosto' },
			  ])
			: ''
	}
	useEffect(() => {
		getChats()
	}, [])
	return (
		<>
			{chatList.map((chat) => (
				<div>
					
				</div>
			))}
		</>
	)
}
export default ChatList
