/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import Message from '../../../models/Chat/Message'
import Sender from '../../../models/Chat/Sender'
import db from '../../../utils/index.js'
const chat = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'POST') {
			const { authType, text, sender } = req.body
			if (authType === '&M%e$A#g$e#I%n&Z*') {
				if (sender === 'new-user') {
					const newSender = new Sender({
						name: `${'Unkown_User_' + Date.now().toString()}`,
						hashTag: `${
							Date.now().toString() +
							'-' +
							Math.random().toString(36).substr(2, 5)
						}`,
					})
					await newSender.save()
					const message = new Message({
						sender: newSender._id,
						message: text,
					})
					await message.save()
					res.status(200).json({ success: true, chatID: newSender._id })
				} else {
					await db.connect()
					const message = new Message({
						sender,
						message: text,
					})
					await message.save()
					res.status(200).json({ success: true })
				}
			} else {
				res.status(409).json({ success: false, message: 'bad method' })
			}
		} else {
			res.status(409).json({ success: false, message: 'bad method' })
		}
	} catch (err) {
		res.status(500).json({ message: `Server Error => ${err}` })
	}
}
export default chat
