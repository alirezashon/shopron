import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { FaSearchengin } from 'react-icons/fa'
interface DataItem {
	_id: number
	email: string
	actionName: string
	time: string
	status: string
	ip: string
	mac: string
	webAgent: string
	__iv: string
}

const ActionManagement = () => {
	const [data, setData] = useState<DataItem[]>([])
	const [isChecked, setIsChecked] = useState(false)
	


	useEffect(() => {
		;(async () => {
			const response = await fetch('/api/Actions', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ authType: '%&AcTiOnS_gEt&%' }),
			})
			const actions = await response.json()
			response.status === 200 && setData(actions.data)
		})()
	}, [])
	const handleSearch = (searchText: string) => {
		// Filter items that match the search text
		const matchingItems = data.filter((item) => {
			// Adjust this condition to match your filtering criteria
			return (
				item.actionName.toLowerCase().includes(searchText.toLowerCase()) ||
				item.email.toLowerCase().includes(searchText.toLowerCase()) ||
				item.status.toLowerCase().includes(searchText.toLowerCase()) ||
				item.time.toLowerCase().includes(searchText.toLowerCase()) ||
				item.ip.toLowerCase().includes(searchText.toLowerCase()) ||
				item.mac.toLowerCase().includes(searchText.toLowerCase()) ||
				item.webAgent.toLowerCase().includes(searchText.toLowerCase())
			)
		})
		// Filter items that do not match the search text
		const nonMatchingItems = data.filter(
			(item) => !matchingItems.includes(item)
		)

		// Combine the matching and non-matching items to have matching items at the beginning
		const updatedData = [...matchingItems, ...nonMatchingItems]
		setData(updatedData)
		console.log(matchingItems)
	}
	return (
		<div className={styles.pannelContainer}>
 			<div className={styles.innerBorder}>
				<div className={styles.navigation}>
					<div className={styles.navWrapper}>
						<div className={styles.searchBox}>
							<input
								type='text'
								className={styles.searchInput}
								placeholder='search...'
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<FaSearchengin
								className={styles.searchIcon}
								size={'4vh'}
							/>
						</div>
								<h1 className={styles.place}>Actions</h1>
						<div className={styles.contoraliBox}>
							<div className={styles.switchWrapper}>
								<label className={styles.label}>DESC</label>

								<input
									type='checkbox'
									className={styles.switch}
									checked={isChecked}
									onChange={()=>setIsChecked(!isChecked)}
								/>
								<label className={styles.label}>ASC</label>
							</div>
						</div>
					</div>
				</div>
				{data?.length > 0 && (
 					<table className={styles.table}>
						<thead>
							<tr>
								{Object.keys(data[0])
									.filter((header) => header !== '_id' && header !== '__v')
									.map((header) => (
										<th key={header}>{header}</th>
									))}
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item._id}>
									<td
										className={styles.tablActive}
										data-label='Action Name'>
										<p>{item.email}</p>
									</td>
									<td data-label='Email'>
										<p>{item.actionName}</p>
									</td>
									<td data-label='time'>
										<p>{item.time}</p>
									</td>
									<td data-label='Status'>
										<p>{item.status}</p>
									</td>
									<td data-label='ip'>
										<p>{item.ip}</p>
									</td>
									<td data-label='mac'>
										<p>{item.mac}</p>
									</td>
									<td data-label='Web Agent'>
										<p>{item.webAgent}</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
 				)}
			</div>
		</div>
	)
}

export default ActionManagement
