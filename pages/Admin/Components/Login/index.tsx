import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

interface LoginProps {
	setToken: (token: boolean) => void
}
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
			const response = await fetch('/api/Auth/Admin/Session/Generator', {
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
				<div className={styles.container}>
					<div className={`${styles.formBox}  ${isLoading && styles.animate}`}>
						{!isLoading && (
							<>
								<Image
									className={styles.logo}
									src={'/images/logo.jpg'}
									width={1111}
									height={1111}
									alt='Kalimogo'
								/>
								<div className={styles.formShadow}>
									<form className={styles.formInnerBox} onSubmit={handleSignIn}>
 											<div className={styles.formRow}>
												<label>Email </label>
												<input
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													type='email'
													required
												/>
											</div>
											<div className={styles.formRow}>
												<label>Password </label>
												<input
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													type='password'
													required
												/>
											</div>
 										<div className={styles.buttonBox}>
											<input
												type='submit'
												className={styles.submit}
											/>
											<button
												className={styles.cancel}
												onClick={() => setFormShow(false)}>
												cancel
											</button>
										</div>
									</form>
								</div>
							</>
						)}
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
