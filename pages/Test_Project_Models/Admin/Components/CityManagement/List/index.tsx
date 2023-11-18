/** @format */

import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

type City = {
	_id: React.Key
	FA: string
	EN: string
	province: string
}

const CityList = () => {
	const [cities, setCities] = useState<City[]>([])
	const [headerText, setHeaderText] = useState<string>('City List')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
	useEffect(() => {
		const fetchCity = async () => {
			try {
				const res = await fetch('/api/CityManagement/GET', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ authType: '&G*E&T%C#I@T%Y^'}),
 				})

				const data = await res.json()
 				setCities(data.cities)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchCity()
	}, [])
	return (
		<div
			className={styles.cityListBackground}
			style={{ width: `${50 * widthPercentage}vw` }}>
			<h2
				className={styles.header}
				onMouseOver={() =>
					setHeaderText('clean miniCity is so better badbigcity')
				}
				onMouseLeave={() => setHeaderText('Cities List')}>
				{headerText}
			</h2>
			<div className={styles.citysBox}>
				<div className={styles.cityBoxScroller}>
					<ul>
						{cities.map((City) => (
							<li
								className={styles.city}
								style={{ width: `${40 * widthPercentage}vw` }}
								key={City._id}>
								<strong className={styles.email}>FA: {City.FA}</strong>
								<strong className={styles.email}>EN: {City.EN}</strong>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default CityList
