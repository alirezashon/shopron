/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import { ip, mac } from 'address'
import Client from '../../../../models/Client'
import Log from '../../../../models/Log'
import db from '../../../../utils'
import {
	generateKeyAndIV,
	encryptText,
} from '../../../../Components/CryptoUtils'
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const IP = ip()
	const MAC = mac((err, addr) => {
		return addr
	})
	const time = new Date().toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'medium',
	})
	try {
		await db.connect()
		if (req.method === 'POST') {
			const { email, phone, password, information, authType } = req.body
			console.log(req.body)
			const webAgent = req.headers['user-agent']
			const logSchema = {
				user: phone || email,
				details: 'Register new user',
				logName: 'Rgister',
				time,
				status: '',
				ip: IP,
				mac: MAC,
				webAgent,
			}
			const registerScheme = {
				email: email || '',
				phone: phone,
				password: '',
				information,
				time,
				ip: IP,
				mac: MAC,
				webAgent,
				keyV: '',
			}
			//Register
			if (authType === 'C%L&i&E^n$T#R&E^g@i&s%T$e#R') {
				const userPhone = await Client.findOne({ phone })
				const userEmail = await Client.findOne({ email })
				if (userPhone?.length > 0 || userEmail?.length > 0) {
					logSchema.status = 'failed'
					const failedSignIn = new Log(logSchema)
					await failedSignIn.save()
					console.log('failed to add new client access')
					console.table(logSchema)
					res.status(209).json({ message: 'user exist, choose other email' })
				} else {
					logSchema.status = 'success'
					const { secretKey, iv } = generateKeyAndIV()
					const encryptedPassword = encryptText(password, secretKey, iv)
					registerScheme.password = encryptedPassword
					registerScheme.keyV = secretKey + '&' + iv
					const newClient = new Client(registerScheme)
					newClient.save()
					console.log('new client add')
					console.table(logSchema)
					const successSignIn = new Log(logSchema)
					successSignIn.save()
					res.status(200).json({ message: 'new client add success' })
				}
				//Forgot Password
			} else if (authType === 'C%L&i&E^n$T#F&O^Rg@tP&As%V$O#R%D#') {
				const userPhone = await Client.findOne({ phone })
				const userEmail = await Client.findOne({ phone })
				if (userEmail.length > 0) {
					logSchema.status = 'success'
					const updateClient = new Log(logSchema)
					await updateClient.save()
					await Client.updateOne({ email }, registerScheme)
					console.log('Client user updated successfully')
					console.table(logSchema)
					res.status(200).json({ message: 'client user updated successfully' })
				} else if (userPhone.length > 0) {
					logSchema.status = 'success'
					const updateClient = new Log(logSchema)
					await updateClient.save()
					await Client.updateOne({ phone }, registerScheme)
					console.log('Client user updated successfully')
					console.table(logSchema)
					res.status(200).json({ message: 'client user updated successfully' })
				} else {
					logSchema.status = 'failed'
					const failedUpdateClient = new Log(logSchema)
					failedUpdateClient.save()
					console.log('update have mistake , may user does not exist')
					console.table(logSchema)
					res.status(209).json({ message: 'update was unSuccess' })
				}
			} else {
				res.status(407).json({
					message:
						'Authentication Type not in body of request , check Auth API',
				})
			}
		} else if (req.method === 'GET') {
			try {
				const clients = await Client.find({})
				console.log(clients)
				res.status(200).json({ success: true, clients })
			} catch (err) {
				res
					.status(505)
					.json({ message: 'have an error to connect DB and got the schema' })
			}
		} else {
			res.status(409).json({ message: 'ttype of method is not correct' })
		}
	} catch (error) {
		console.error('Error :', error)
		res.status(500).json({ message: 'Server Error' })
	}
}
