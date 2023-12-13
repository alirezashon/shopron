/** @format */

// components/MessageList.js
import React from 'react'
interface Props {
	messages: string[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
	return (
		<>
			<div style={styles.messageBox}>
				{messages.map((message, index) => (
					<li style={styles.message} key={index}>{message}</li>
				))}
			</div>
       
		</>
	)
}

export default MessageList

const styles = {
  messageBox: {
    width: '100%',
    height:'88vh',
    background:'linear-gradient(7deg,rgba(44,77,121,.9),rgba(22,44,66,.9))'
  },
  message: {
    
  }
}