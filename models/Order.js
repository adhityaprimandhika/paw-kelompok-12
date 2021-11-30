const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true, unique: true },
		userName: { type: String, required: true },
		products: [
			{
				prodcutId: {
					type: String
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		amount: { type: Number, required: true },
		status: { type: String, default: 'Dine In' }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
