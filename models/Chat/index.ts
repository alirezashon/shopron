import mongoose from 'mongoose'
const chatSchema = new mongoose.Schema({
	sender: { type: String, required: true },
	message: { type: String, required: true },
	time: { type: Date, default: Date.now },
})
const ChatModel = mongoose.model('Chat', chatSchema)
export default ChatModel