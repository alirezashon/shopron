/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import Data from '../../../../../../models/Data'
import db from '../../../../../../utils'
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'POST') {
			const { bulkID, authType } = req.body
			if (authType === 'G&E!T*P^R$O#D$U^C@T*B^u$l*K$') {
				await db.connect()
				const products = await Data.find({ _id: { $in: bulkID } })
				res.status(200).json({ success: true, products })
			} else {
				res.status(407).json({ success: false, message: 'Invalid Auth Type' })
			}
		} else {
			res.status(409).json({ success: false, message: 'Invalid Request Type' })
		}
	} catch (err) {
		res.status(500).json({ success: false, message: `Server Error => ${err}` })
	}
}
