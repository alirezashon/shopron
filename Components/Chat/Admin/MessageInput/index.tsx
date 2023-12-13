// components/MessageInput.js
import React, { useState } from 'react';
interface Props {
    onSendMessage:(inputMessage:string)=>void
}
const MessageInput :React.FC<Props> = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState<string>('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
