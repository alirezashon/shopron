import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

type Client = {
	email: string
	password: string
}

const ClientList = () => {
	const [clients, setClients] = useState<Client[]>([])
	const [headerText, setHeaderText] = useState<string>('Clients List')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
	useEffect(() => {
		const fetchClients = async () => {
			try {
				const res = await fetch('/api/Auth/ClientManagement/GET', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body:JSON.stringify({authType:'G!E@T#C^L#I$E%N*T^'})
				})

				if (!res.ok) {
					console.error('Error fetching Clients')
					return
				}

				const data = await res.json()
				setClients(data.clients)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchClients()
	}, [])

	return (
		<div
			className={styles.clientListBackground}
			style={{ width: `${50 * widthPercentage}vw` }}>
			<h2
				className={styles.header}
				onMouseOver={() => setHeaderText('Exit')}
				onMouseLeave={() => setHeaderText('Client List')}>
				{headerText}
			</h2>
			<div className={styles.clientsBox}>
				<div className={styles.clientBoxScroller}>
					<ul>
						{clients.map((client) => (
							<li
								className={styles.client}
								style={{ width: `${40 * widthPercentage}vw` }}
								key={client.email}>
								<strong className={styles.email}>email: {client.email}</strong>{' '}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default ClientList
