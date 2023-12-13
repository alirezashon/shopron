import React, { useState,useEffect } from 'react'
import MessageList from '../MessageList'
import MessageInput from './MessageInput'


const Chatroom: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([])

	const addMessage = (message: string) => {
		setMessages([...messages, message])
	}

  
  const createConnection = async (user:string) => {
    const response = await fetch('/api/chatroom', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({authType:'',user})
    })
    const data = await response.json()
    console.log(data)
  }
    
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '')
    createConnection(user)
     }, [])
  
	return (
		<div>
			<MessageList messages={messages} />
			<MessageInput onSendMessage={addMessage} />
		</div>
	)
}
export default Chatroom