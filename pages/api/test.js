/** @format */

// pages/api/clientInfo.js

import {getClientInfo} from '../../Components/ali'
export default (req, res) => {
	 const clientInfo = getClientInfo()
	if (clientInfo) {
		res.status(200).json(clientInfo)
	} else {
		res.status(500).json({ error: 'Unable to retrieve client information.' })
	}
}
