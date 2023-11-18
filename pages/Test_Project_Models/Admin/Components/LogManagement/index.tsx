 
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { FaSearchengin } from 'react-icons/fa'
interface DataItem {
	_id: number
    email: string
	password: string 
	logName: string
	time: string
	status: string
	ip: string
	mac: string
	webAgent: string
	__iv: string
}
 
const LogManagement :React.FC  = () => {
	const [data, setData] = useState<DataItem[]>([])
	useEffect(() => {
		; (async () => {
			const response = await fetch('/api/Logs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ authType:'%&LoG_gEt&%'}),
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
							item.logName?.toLowerCase().includes(searchText.toLowerCase()) ||
                            item.email?.toLowerCase().includes(searchText.toLowerCase()) ||
							item.status?.toLowerCase().includes(searchText.toLowerCase()) ||
							item.time?.toLowerCase().includes(searchText.toLowerCase()) ||
							item.ip?.toLowerCase().includes(searchText.toLowerCase()) ||
							item.mac?.toLowerCase().includes(searchText.toLowerCase()) ||
							item.webAgent?.toLowerCase().includes(searchText.toLowerCase())
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
        <div className={styles.tableContainer}>
            <div className={styles.innerBorder}>
				<h1>Logs</h1>
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
				{data?.length > 0 && (
					<table className={styles.table}>
						<thead>
							<tr>
								{Object.keys(data[0])
									.filter((header) => header !== '_id' && header !== 'password' && header !== '__v')
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
										data-label='Email'>
										<p>{item.email}</p>
									</td>
									<td data-label='Log Name' >
										<p>{item.logName}</p>
									</td>
									<td data-label='Status'>
										<p>{item.status}</p>
										<div className={styles.additionalElement}>
											Additional Info
										</div>
									</td>
									<td data-label='time'>
										<p>{item.time}</p>
										<div className={styles.additionalElement}>
											Additional Info
										</div>
									</td>
									<td data-label='ip'>
										<p>{item.ip}</p>
										<div className={styles.additionalElement}>
											Additional Info
										</div>
									</td>
									<td data-label='mac'>
										<p>{item.mac}</p>
										<div className={styles.additionalElement}>
											Additional Info
										</div>
									</td>
									<td data-label='Web Agent'>
										<p>{item.webAgent}</p>
										<div className={styles.additionalElement}>
											Additional Info
										</div>
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

export default LogManagement
