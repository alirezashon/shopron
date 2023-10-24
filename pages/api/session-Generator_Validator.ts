import { NextApiRequest, NextApiResponse } from 'next'
import { decryptText } from '../../../../../../Components/CryptoUtils'
import ClientSession from '../../../../../../models/Client/Session'
import Client from '../../../../../../models/Client'
import db from '../../../../../../utils'
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'POST') {
			const { authType } = req.body
			if (authType === 'ClIeNt_ValidaTe*%') {
				const cookies = req.headers.cookie || ''
				const cookieMatch = cookies.match(
					/CTFlEoiSHkeNnToMBLiShoOekn3kN2y@k=([^;]*)/
				)
				if (cookieMatch && cookieMatch[1]) {
					await db.connect()
					const token = cookieMatch[1]
					const kalim = token.split('#')[1]
					const session = await ClientSession.findOne({
						key: kalim,
					})
					if (session) {
						const decryptedPassword = decryptText(
							token.split('#')[0],
							session.clientSessionToken.split('&')[2],
							session.clientSessionToken.split('&')[0]
						)
						const clientSchema = await Client.findOne({ _id: session.client })
						const validatePass =
							decryptedPassword.split('%')[1] +
							'&' +
							decryptedPassword.split('%')[0]

						if (clientSchema.keyV === validatePass) {
							res.status(200).json({ success: true, message: 'token exist' })
						} else {
							res
								.status(401)
								.json({ success: false, message: 'Session is not valid' })
						}
					} else {
						res
							.status(209)
							.json({ success: false, message: 'session is expired' })
					}
				} else {
					res.status(209).json({
						success: false,
						message: 'validation failed token not exist',
					})
				}
			} else {
				res.status(407).json({ success: false, message: 'Invalid auth type' })
			}
		} else {
			res.status(409).json({ success: false, message: 'Invalid method' })
		}
	} catch (err) {
		res.status(500).json({ success: false, message: `Server Error => ${err}` })
	}
}
//////////////////////////////GENERATOR//////////////////////////////////////









/** @format */

import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { ip, mac } from 'address'
import db from '../../../../../../utils'
import Client from '../../../../../../models/Client'
import ClientSession from '../../../../../../models/Client/Session'
import Log from '../../../../../../models/Log'
import {
	decryptText,
	generateKeyAndIV,
	encryptText,
} from '../../../../../../Components/CryptoUtils'
export default async (req: NextApiRequest, res: NextApiResponse) => {
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
				email: userPass.split('&')[0],
				password: '****',
				logName: 'Client Login',
				time,
				status: '',
				ip: IP,
				mac: MAC,
				webAgent,
			}
			if (authType === '&^ClieNt%LOgIn^&') {
				const client = await Client.findOne({ email: userPass.split('&')[0] })
				if (client) {
					const decryptedCorrectPassword = decryptText(
						client.password,
						client.keyV.split('&')[0],
						client.keyV.split('&')[1]
					)
					if (userPass.split('&')[1] === decryptedCorrectPassword) {
						const { secretKey, iv } = generateKeyAndIV()
						const generateSession = encryptText(
							client.keyV.split('&')[1] + '%' + client.keyV.split('&')[0],
							secretKey,
							iv
						)
						const kalim = crypto.randomBytes(16).toString('hex')
						const token = generateSession + '#' + kalim
						const session = new ClientSession({
							client: client._id,
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
								token
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
