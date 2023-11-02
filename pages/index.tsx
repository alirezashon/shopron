	
import React, { useEffect, useState } from 'react'
import Login from '../Components/Login'
import Handler from '../Handler'
import Image from 'next/image'

const RootPage = () => {
	const [token, setToken] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(true)

	const validator = async (token: string) => {
		try {
			const response = await fetch('/api/Auth/Admin/Session/Validator', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					authType: 'Admin_ValidaTe*%',
					token: token,
				}),
			})

			const data = await response.json()
			console.log(data)
			console.log(response.status)

			if (response.status === 200) {
				setToken(true)
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const session = sessionStorage.getItem('token')
		session ? validator(session) : setLoading(false)
	}, [])

	return (
		<>
			{loading ? (
				<Image
					style={{ width: '100vw', height: '100vh' }}
					src={'/images/ele.jpg'}
					width={2222}
					height={2222}
					alt='Loading...'
				/>
			) : token ? (
				<Handler />
			) : (
				<Login setToken={setToken} />
			)}
		</>
	)
}

export default RootPage
