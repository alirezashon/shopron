/** @format */

import { useState, useEffect } from 'react'

interface Chat {
	sender: string
	message: string
	time: Date
}
const ChatList: React.FC = () => {
	const [chatList, setChatList] = useState<Chat[]>([])
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
					{ sender: 'hamidReza', message: 'kalimReza', time: new Date() },
			  ])
			: ''
	}
    useEffect(() => {
     getChats()
    }, [])
	return (
		<>
    {chatList.length>0 && chatList[0].sender}
            <div></div>
		</>
	)
}
export default ChatList
