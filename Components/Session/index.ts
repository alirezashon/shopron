/** @format */

export const Generator = async (user: string, pass: string) => {
	try {
		// Send a request to your API to authenticate the user
		const response = await fetch('/api/Auth/Session/Generator', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userPass: user + '&' + pass,
				authType: '&^ClieNt%LOgIn^&B*y^P$h#o@N#E',
			}),
		})
		const data = await response.json()
		if (data.success === true && response.status === 200) {
			return { success: true, data }
		} else {
			return data.message
		}
	} catch (error) {
		console.log(error)
	}
}

export const Validator = async (token: string) => {
	try {
		const response = await fetch('/api/Auth/Session/Validator', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				authType: 'ClIeNt_ValidaTe*%',
				token: token,
			}),
		})
		await response.json()
		if (response.status === 200) {
			return true
		}
	} catch (error) {
		console.log(error)
	}
}
