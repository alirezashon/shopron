 
import { useState } from 'react'
import styles from '../../styles/login.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import Image from 'next/image'
interface LoginProps {
	setToken: (token: boolean) => void
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
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
			{isLoading ? (
				<div className={styles.loading}></div>
			) : (
				<div className={styles.authBox}>
					<div className={styles.authInnerBox}>
						<Image
							width={1111}
							height={1111}
							className={styles.authLogo}
							src={'/images/logo.jpg'}
							alt='Logo'
						/>
						<form
							onSubmit={handleSignIn}
							className={styles.authForm}>
							<div className={styles.authFormRow}>
								<input
									className={styles.authInput}
									dir='rtl'
									placeholder='ایمیل'
									id='email'
									type='email'
									required
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									dir='rtl'
									className={styles.authInput}
									id='password'
									type='password'
									placeholder='رمز عبور'
									value={password}
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
								<div className={styles.authBtnsBox}>
									<input
										type='submit'
										value='ورود'
										className={styles.authFormSubmit}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}
export default Login
