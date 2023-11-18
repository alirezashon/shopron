
import React, { useState } from 'react'
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
 

const AgentManagement = () => {
	const [action, setAction] = useState<string>('insert')
	const [agentName, setAgentName] = useState<string>('')
	const [agentCode, setAgentCode] = useState<string>('')
	const [headerText, setHeaderText] = useState<string>('Agent Management')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
 	const actions = ['insert', 'update', 'delete']
	const handleAgents = (e: React.FormEvent) => {
		const handleAgent = async (agentData: object) => {
			try {
				const res = await fetch('/api/AgentManagement', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(agentData),
				})

				if (res.status != 200) {
					console.error('Error fetching agents')
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
		// Prepare the agent data
		const agentData = {
			agentName,
			agentCode,
			user,
			actionType:
				action === 'insert'
					? '%&INsertAGent&%'
					: action === 'update'
					? '%&UPdateAGent&%'
					: '%DEleteAGent&%',
		}
		console.log(agentData)

		handleAgent(agentData)
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
				className={styles.agentManagementBox}
				style={{ width: `${50 * widthPercentage}vw` }}>
				<h2
					className={styles.header}
					onMouseOver={() => setHeaderText('My favorite color is blue because it reminds me of the ocean.')}
					onMouseLeave={() => setHeaderText('Agent Management')}>
					{headerText}
				</h2>
				<div className={styles.formBox}>
					<form
						className={styles.form}
						style={{ width: `${33 * widthPercentage}vw` }}
						onSubmit={handleAgents}>
						<div className={styles.labelBox}>
							<label className={styles.label}>Action:</label>
							{actions.map((action) => (
								<div
									className={styles.radioContainer}
									key={action}>
									<input
										type='radio'
										id={action + 'Agent'}
										name='AgentAction'
										value={action}
										onChange={() => setAction(action)}
									/>
									<label
										htmlFor={action+'Agent'}
										className={styles.radioLabel}>
										{action}
									</label>
								</div>
							))}
						</div>

						<div className={styles.labelBox}>
							<label  className={styles.label}>
							Agent Name &nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									type='text'
									placeholder='Agent Name'
									value={agentName}
									onChange={(e) => setAgentName(e.target.value)}
									required
								/>
							</label>
						</div>
						{action !== 'delete' && (
							<div className={styles.labelBox}>
								<label  className={styles.label}>
									Agent Code &nbsp;
									<input
										className={styles.input}
										style={{ width: `${22 * widthPercentage}vw` }}
										placeholder='Agent Code'
										type='text'
										value={agentCode}
										onChange={(e) => setAgentCode(e.target.value)}
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
export default AgentManagement
