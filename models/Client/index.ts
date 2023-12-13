
import mongoose from 'mongoose'
const clientSchema = new mongoose.Schema({
	email: String,
	phone: { type: Number, required: true, unique: true },
	password: { type: String, required: true },
	information: {
		address: { type: String, required: true },
		houseNumber: { type: Number, required: true },
		houseUnit: { type: Number, required: true },
		zipCode: String,
	},
 	time: String,
	ip: String,
	mac: String,
	webAgent: String,
	keyV: { type: String, required: true },
})
const Client = mongoose.models.Client || mongoose.model('Client', clientSchema)
export default Client
