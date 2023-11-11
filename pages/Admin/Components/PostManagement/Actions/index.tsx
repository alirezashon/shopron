/** @format */

import React, { useState } from 'react'
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'

const ClientManagement = () => {
	const [action, setAction] = useState<string>('insert')
	const [title, setTitle] = useState<string>('')
	const [src, setSrc] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [headerText, setHeaderText] = useState<string>('Client Management')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
	const actions = ['insert', 'update', 'delete']
	const handleClientClients = (e: React.FormEvent) => {
		const handleClients = async (clientData: object) => {
			const authType =
				action === 'insert'
					? '!I@N$e$r%T&O*'
					: action === 'update'
					? '&U*P^d%A&T^e%O#Y@'
					: '*D(e&L*e$T#e$o%y*a!'
			const user = localStorage.getItem('user')

			try {
				const res = await fetch('/api/data/Post/Admin', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ authType, data: clientData, user }),
				})

				if (res.status != 200) {
					console.error('Error fetching clients')
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
		// Prepare the client data
		const clientData = {
			title,
			src,
			price,
			category,
			description,
		}

		handleClients(clientData)
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
				className={styles.clientManagementBox}
				style={{ width: `${50 * widthPercentage}vw` }}>
				<h2
					className={styles.header}
					onMouseOver={() => setHeaderText('Clients need a kind Admin')}
					onMouseLeave={() => setHeaderText('Clients Management')}>
					{headerText}
				</h2>
				<div className={styles.formBox}>
					<form
						className={styles.form}
						style={{ width: `${33 * widthPercentage}vw` }}
						onSubmit={handleClientClients}>
						<div className={styles.labelBox}>
							<label className={styles.label}>Action:</label>
							{actions.map((action) => (
								<div
									className={styles.radioContainer}
									key={action}>
									<input
										type='radio'
										id={action + 'client'}
										name='clientAction'
										value={action}
										onChange={() => setAction(action)}
									/>
									<label
										htmlFor={action + 'client'}
										className={styles.radioLabel}>
										{action}
									</label>
								</div>
							))}
						</div>

						<div className={styles.labelBox}>
							<label className={styles.label}>
								Title &nbsp;&nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									placeholder='title'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</label>
						</div>
						<div className={styles.labelBox}>
							<label className={styles.label}>
								Src &nbsp;&nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									placeholder='src'
									value={src}
									onChange={(e) => setSrc(e.target.value)}
									required
								/>
							</label>
						</div>
						<div className={styles.labelBox}>
							<label className={styles.label}>
								Price &nbsp;&nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									placeholder='price'
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									required
								/>
							</label>
						</div>
						<div className={styles.labelBox}>
							<label className={styles.label}>
								Category &nbsp;&nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									placeholder='category'
									value={category}
									onChange={(e) => setCategory(e.target.value)}
									required
								/>
							</label>
						</div>
						{action !== 'delete' && (
							<div className={styles.labelBox}>
								<label className={styles.label}>
									Description &nbsp;
									<textarea
										className={styles.input}
										style={{ width: `${22 * widthPercentage}vw` }}
										placeholder='Description'
										value={description}
										onChange={(e) => setDescription(e.target.value)}
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
export default ClientManagement
