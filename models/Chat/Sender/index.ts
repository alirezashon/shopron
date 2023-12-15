/** @format */

import mongoose from 'mongoose'

const senderSchema = new mongoose.Schema({
	name: { type: String, required: true },
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat',
			required: false,
		},
	],
	hashTag: { type: String, required: true },
})

const Sender = mongoose.models.Sender || mongoose.model('Sender', senderSchema)
export default Sender
