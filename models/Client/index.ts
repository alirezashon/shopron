import mongoose from 'mongoose'
const clientSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	time: String,
	ip: String,
	mac: String,
	webAgent: String,
	keyV: { type: String, required: true },
})
const Client = mongoose.models.Client || mongoose.model('Client', clientSchema)
export default Client
