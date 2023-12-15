/** @format */

import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sender',
		required: true,
	},
	message: { type: String, required: true },
	time: { type: Date, default: Date.now },
})
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)

export default Message
