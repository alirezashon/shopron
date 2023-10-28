
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { useState } from 'react'
import styles from './index.module.css'

const ActionUser = () => {
	const [user, setUser] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [formShow, setFormShow] = useState<boolean>(true)
	const handleSubmit = async () => {
		const response = await fetch('/api/', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user, password }),
		})
		const result = await response.json()
		response.status === 200
			? toast.success(result.message)
			: toast.warn(result.message)
	}
	return (
		<>
			{user}
			{password}
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
									value={user}
									onChange={(e) => setUser(e.target.value)}
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
export default ActionUser
