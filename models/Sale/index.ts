import mongoose from 'mongoose'
const time = new Date().toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'medium',
	})
const saleSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required:true,
    },
    Products: {
        type: Object,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    time:time

})
const SaleSchema = mongoose.models.SaleSchema || mongoose.model('SaleSchema', saleSchema)
export default SaleSchema