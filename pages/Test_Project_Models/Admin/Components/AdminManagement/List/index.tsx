/** @format */

import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

type admin = {
	email: string
	password: string
}

const AdminList = () => {
	const [admins, setadmins] = useState<admin[]>([])
	const [headerText, setHeaderText] = useState<string>('Admin List')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
	useEffect(() => {
		const fetchadmins = async () => {
			try {
				const res = await fetch('/api/Auth/Admin/GET', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ authType: 'G!E@T#A^D#M$I%N*' }),
				})

				if (!res.ok) {
					console.error('Error fetching admins')
					return
				}

				const data = await res.json()
				setadmins(data.admins)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchadmins()
	}, [])

	return (
		<div
			className={styles.adminListBackground}
			style={{ width: `${50 * widthPercentage}vw` }}>
			<h2
				className={styles.header}
				onMouseOver={() =>
					setHeaderText('The sun rises in the east every morning.')
				}
				onMouseLeave={() => setHeaderText('admins List')}>
				{headerText}
			</h2>
			<div className={styles.adminsBox}>
				<div className={styles.adminBoxScroller}>
					<ul>
						{admins.map((admin) => (
							<li
								className={styles.admin}
								style={{ width: `${40 * widthPercentage}vw` }}
								key={admin.email}>
								<strong className={styles.email}>email: {admin.email}</strong>{' '}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default AdminList
