
import React, { useState } from 'react'
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
 

const AdminManagement = () => {
	const [action, setAction] = useState<string>('insert')
	const [adminName, setAdminName] = useState<string>('')
	const [adminPass, setAdminPass] = useState<string>('')
	const [headerText, setHeaderText] = useState<string>('Admin Management')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
 	const actions = ['insert', 'update', 'delete']
	const handleAdminAdmins = (e: React.FormEvent) => {
		const handleAdmins = async (adminData: object) => {
			try {
				const res = await fetch('/api/Auth/Admin', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(adminData),
				})

				if (res.status != 200) {
					console.error('Error fetching admins')
					console.log(res)
					toast.error(`${action} unSuccessfull have an error `)
					return
				}
				const data = await res.json()
				console.table(data)
				toast.success(`${action} successfull`)
			} catch (error) {
				console.error('Error:', error)
			}
		}
		const user = localStorage.getItem('user')
		// Prepare the admin data
		const adminData = {
			email:adminName, 
			password : adminPass,
			user,
			authType:
				action === 'insert'
					? '%&AdmiN_InserT&%'
					: action === 'update'
					? '%&AdmiN_UpdatE&%'
					: '%&AdmiN_DeletE&%',
		}
 
		handleAdmins(adminData)
		e.preventDefault()
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
			<div
				className={styles.adminManagementBox}
				style={{ width: `${50 * widthPercentage}vw` }}>
				<h2
					className={styles.header}
					onMouseOver={() => setHeaderText('She enjoys reading novels in her free time.')}
					onMouseLeave={() => setHeaderText('Admin Management')}>
					{headerText}
				</h2>
				<div className={styles.formBox}>
					<form
						className={styles.form}
						style={{ width: `${33 * widthPercentage}vw` }}
						onSubmit={handleAdminAdmins}>
						<div className={styles.labelBox}>
							<label className={styles.label}>Action:</label>
							{actions.map((action) => (
								<div
									className={styles.radioContainer}
									key={action}>
									<input
										type='radio'
										id={action+'Admin'}
										name='AdminAction'
										value={action}
										onChange={() => setAction(action)}
									/>
									<label
										htmlFor={action+'Admin'}
										className={styles.radioLabel}>
										{action}
									</label>
								</div>
							))}
						</div>

						<div className={styles.labelBox}>
							<label  className={styles.label}>
							Email &nbsp;&nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									type='text'
									placeholder='Email'
									value={adminName}
									onChange={(e) => setAdminName(e.target.value)}
									required
								/>
							</label>
						</div>
						{action !== 'delete' && (
							<div className={styles.labelBox}>
								<label  className={styles.label}>
									Password
									<input
										className={styles.input}
										style={{ width: `${22 * widthPercentage}vw` }}
										placeholder='Password'
										type='password'
										value={adminPass}
										onChange={(e) => setAdminPass(e.target.value)}
										required
									/>
								</label>
							</div>
						)}
						<button
							className={styles.submitBtn}
							type='submit'>
							{action.toLocaleUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
export default AdminManagement
