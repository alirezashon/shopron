/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import Sender from '../../../../../models/Chat/Sender'
import db from '../../../../../utils'
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'POST') {
			const { authType } = req.body
			if (authType === '!C#o$N%e^C&t*O$C#h$t%') {
				await db.connect()
				const senders = await Sender.find({})
				res.status(200).json({ senders, success: true })
			} else {
				res.status(407).json({ message: 'Invalid auth type', success: false })
			}
		} else {
			res.status(409).json({ message: 'Invalid method', success: false })
		}
	} catch (error) {
		res.status(500).json({ message: 'Server Error', error })
	}
}
export default GET