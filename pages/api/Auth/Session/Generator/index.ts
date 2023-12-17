/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { ip, mac } from 'address'
import db from '../../../../../utils'
import Client from '../../../../../models/Client'
import ClientSession from '../../../../../models/Client/Session'
import Log from '../../../../../models/Log'
import {
	decryptText,
	generateKeyAndIV,
	encryptText,
} from '../../../../../Components/CryptoUtils'
const Generator = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const webAgent = req.headers['user-agent']
		const time = new Date().toLocaleString('en-US', {
			dateStyle: 'medium',
			timeStyle: 'medium',
		})
		const IP = ip()
		const MAC = mac(function (err, addr) {
			console.log('new client : ' + addr) // '78:ca:39:b0:e6:7d'
			return addr
		})
		if (req.method === 'POST') {
			await db.connect()
			const { userPass, authType } = req.body
			const logSchema = {
				user: userPass.split('&')[0],
				logName: 'Client Login',
				time,
				status: '',
				ip: IP,
				mac: MAC,
				webAgent,
			}
			if (authType === '&^ClieNt%LOgIn^&B*y^P$h#o@N#E') {
				const clientPhone = parseInt(userPass.split('&')[0])
					? await Client.findOne({
							phone: parseInt(userPass.split('&')[0]),
					  })
					: await Client.findOne({
							email: userPass.split('&')[0],
					  })

				if (clientPhone) {
					const decryptedCorrectPassword = decryptText(
						clientPhone.password,
						clientPhone.keyV.split('&')[0],
						clientPhone.keyV.split('&')[1]
					)
					if (userPass.split('&')[1] === decryptedCorrectPassword) {
						const { secretKey, iv } = generateKeyAndIV()
						const generateSession = encryptText(
							clientPhone.keyV.split('&')[1] +
								'%' +
								clientPhone.keyV.split('&')[0],
							secretKey,
							iv
						)
						const kalim = crypto.randomBytes(16).toString('hex')
						const token = generateSession + '#' + kalim
						const session = new ClientSession({
							client: clientPhone._id,
							clientSessionToken: iv + '&' + token + '&' + secretKey,
							key: kalim,
						})
						await session.save()
						logSchema.status = 'success'
						await new Log(logSchema).save()
						res
							.setHeader(
								'Set-Cookie',
								`CTFlEoiSHkeNnToMBLiShoOekn3kN2y@k=${token}; Max-Age=${
									60 * 60 * 7
								}; HttpOnly; Secure; SameSite=Strict; Path=/;`
							)
							.status(200)
							.json({
								success: true,
								message: 'Login was successful',
								token,
							})
					} else {
						logSchema.status = 'failed'
						await new Log(logSchema).save()
						res
							.status(401)
							.json({ success: false, message: 'Invalid password' })
					}
				} else {
					res.status(209).json({ success: false, message: 'email not found' })
				}
			} else {
				res.status(407).json({ success: false, message: 'Invalid auth type' })
			}
		} else {
			res.status(409).json({ successs: false, message: 'Invalid request type' })
		}
	} catch (err) {
		if (err) {
			console.log(err)
			res
				.status(500)
				.json({ success: false, message: `Server Error => ${err}` })
		}
	}
}
export default Generator