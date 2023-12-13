import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

interface Props {
  onSendMessage: (inputMessage: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState<string>('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <input
        type='text'
        value={inputMessage}
        style={styles.input}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type='button' onClick={sendMessage} style={styles.submit}>
			  <IoIosSend color={ 'white'} size={'100%'} />
      </button>
    </div>
  );
};

export default MessageInput;

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, #333, #fff)',
    padding: '10px',
    borderRadius: '5px',
  },
  input: {
    width: '100%',
    height: '30px',
    margin: '5px 0',
    padding: '5px',
    borderRadius: '3px',
    border: 'none',
    background: 'linear-gradient(to bottom right, #ddd, #555)',
    color: '#333',
  },
  submit: {
    width: '100%',
    height: '30px',
    borderRadius: '3px',
    border: 'none',
    background: 'linear-gradient(to bottom right, #ffcc00, #cc9900)',
    color: '#333',
    cursor: 'pointer',
  },
};
