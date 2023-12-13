 
import mongoose from 'mongoose'

const senderSchema = new mongoose.Schema({
	name: { type: String, required: true },  
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat',
		},
	],
	hashTag: { type: String, required: true },
})

const Sender = mongoose.model('Sender', senderSchema)

export default Sender
