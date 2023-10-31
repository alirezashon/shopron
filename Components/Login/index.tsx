/** @format */

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { useState } from 'react'
import styles from './index.module.css'

interface LoginProps {
	setToken: (token: boolean) => void
}
/////////////////////////Kharabe//////////////////////
const Login: React.FC<LoginProps> = ({ setToken }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [formShow, setFormShow] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState(false)
	const handleSignIn = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		setIsLoading(true)

		console.log('Email: ', email)
		try {
			// Send a request to your API to authenticate the user
			const response = await fetch('/api/Auth/Login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userPass: email + '&' + password,
					authType: '&^Admin%LOgIn^&',
				}),
			})
			const data = await response.json()
			if (data.success === true && response.status === 200) {
				localStorage.setItem('user', JSON.stringify(email))
				sessionStorage.setItem('token', JSON.stringify(data.token))
				setToken(true)
				toast.success(data.message)
			} else {
				toast.error(data.message)
				setIsLoading(false)
			}
		} catch (error) {
			console.log(error)
			toast.error('failed call login api' + error)
		}
	}
	return (
		<>
			 
			<ToastContainer
				position={'top-right'}
				newestOnTop
				pauseOnHover
				style={{
					transform: 'rotate(-7deg)',
					margin: '2vh',
				}}
				transition={Zoom}
			/>
			{formShow ? (
				<div className={styles.formBox}>
					<div className={styles.formShadow}>
						<div className={styles.formInnerBox}>
							<div className={styles.formRow}>
								<label>Email : </label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className={styles.formRow}>
								<label>Password : </label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className={styles.buttonBox}>
							<button className={styles.submit}>submit</button>
							<button
								className={styles.cancel}
								onClick={() => setFormShow(false)}>
								cancel
							</button>
						</div>
					</div>
				</div>
			) : (
				<button
					className={styles.cancel}
					onClick={() => setFormShow(true)}>
					open
				</button>
			)}
		</>
	)
}
export default Login
