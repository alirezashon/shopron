import React, { useState } from 'react'
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer, Zoom } from 'react-toastify'
 

const CityManagement = () => {
	const [action, setAction] = useState<string>('insert')
	const [city, setCity] = useState<string>('')
	const [cityEN, setCityEN] = useState<string>('')
	const [province, setProvince] = useState<string>('')
	const [headerText, setHeaderText] = useState<string>('City Management')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
 	const actions = ['insert', 'update', 'delete']
	const handleClientCitys = (e: React.FormEvent) => {
		const handleCities = async (cityData: object) => {
			try {
				const res = await fetch('/api/CityManagement', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(cityData),
				})

				if (res.status != 200) {
					console.error('Error fetching citys')
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
		// Prepare the city data
		const cityData = {
			EN:cityEN,
			FA:city,
			province,
			user,
			actionType: 
				action === 'insert'
					? '%&City_InserT&%'
					: action === 'update'
					? '%&City_UpdatE&%'
					: '%&City_DeletE&%',
		}
		console.log(cityData)

		handleCities(cityData)
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
				className={styles.cityManagementBox}
				style={{ width: `${50 * widthPercentage}vw` }}>
				<h2
					className={styles.header}
					onMouseOver={() => setHeaderText('We are our home and our city !')}
					onMouseLeave={() => setHeaderText('City Management')}>
					{headerText}
				</h2>
				<div className={styles.formBox}>
					<form
						className={styles.form}
						style={{ width: `${33 * widthPercentage}vw` }}
						onSubmit={handleClientCitys}>
						<div className={styles.labelBox}>
							<label className={styles.label}>Action:</label>
							{actions.map((action) => (
								<div
									className={styles.radioContainer}
									key={action}>
									<input
										type='radio'
										id={action+ 'city'}
										name='cityAction'
										value={action}
										onChange={() => setAction(action)}
									/>
									<label
										htmlFor={action+ 'city'}
										className={styles.radioLabel}>
										{action}
									</label>
								</div>
							))}
						</div>

						<div className={styles.labelBox}>
							<label  className={styles.label}>
							CityFA &nbsp;
								<input
									className={styles.input}
									style={{ width: `${22 * widthPercentage}vw` }}
									type='text'
									placeholder='City FA'
									value={city}
									onChange={(e) => setCity(e.target.value)}
									required
								/>
							</label>
						</div>
						{action !== 'delete' && (
							<>
								<div className={styles.labelBox}>
								<label  className={styles.label}>
									City EN &nbsp;
									<input
										className={styles.input}
										style={{ width: `${22 * widthPercentage}vw` }}
										placeholder='City EN'
										type='text'
										value={cityEN}
										onChange={(e) => setCityEN(e.target.value)}
										required
										/>
								</label>
							</div>
							<div className={styles.labelBox}>
								<label  className={styles.label}>
									Province &nbsp;
									<input
										className={styles.input}
										style={{ width: `${22 * widthPercentage}vw` }}
										placeholder='Province'
										type='text'
										value={province}
										onChange={(e) => setProvince(e.target.value)}
										required
										/>
								</label>
							</div>
						</>
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
export default CityManagement
