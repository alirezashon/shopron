/** @format */
import headers from './headers'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { FaSearchengin } from 'react-icons/fa'

const Assetronerch: React.FC<{ excelData: string[][]; visible: boolean }> = ({
	excelData,
	visible,
}) => {
	const [data, setData] = useState<string[][]>([])
	const [isChecked, setIsChecked] = useState(false)

	useEffect(() => {
		const CPE = data.filter((row) => {
			return row[6]?.length > 2
		})
		const accessory = data.filter((row) => {
			return row[6]?.length < 2
		})
		if (CPE.length > 0 && accessory.length > 0) {
			isChecked
				? setData([...accessory, ...CPE])
				: setData([...CPE, ...accessory])
		}
		setData(excelData)
	}, [isChecked, excelData])
	const handleSearch = (searchText: string) => {
		const matchingItems = data.filter((row) => {
			return row.some(
				(feild) =>
					feild.toLowerCase().match(searchText.toLocaleLowerCase()) ||
					feild.toLowerCase() === searchText.toLocaleLowerCase() ||
					feild.toLowerCase().startsWith(searchText.toLocaleLowerCase())
			)
		})

		// Filter items that do not match the search text

		const nonMatchingItems = data.filter((row) => {
			return !row.some(
				(feild) =>
					feild.toLowerCase().match(searchText.toLocaleLowerCase()) ||
					feild.toLowerCase() === searchText.toLocaleLowerCase() ||
					feild.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())
			)
		})
		const updatedData = [...matchingItems, ...nonMatchingItems]
		console.log(updatedData)
		updatedData.length > 0 && setData(updatedData)
	}
	return (
		<>
 			{visible && (
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
								<div className={styles.contordataBox}>
									<div className={styles.switchWrapper}>
										<label
											className={`${styles.label} ${
												isChecked ? '' : styles.selectedRadio
											}`}>
											CPE/SIM
										</label>

										<input
											type='checkbox'
											className={styles.switch}
											checked={isChecked}
											onChange={() => setIsChecked(!isChecked)}
										/>
										<label
											className={`${styles.label} ${
												isChecked ? styles.selectedRadio : ''
											}`}>
											Accessory
										</label>
									</div>
								</div>
							</div>
						</div>
						<table className={styles.tabelasearch}>
							<thead>
								<tr>
									{headers.map((header) => (
										<th
											style={{
												whiteSpace: 'nowrap',
												width: 'auto',
												textOverflow: 'ellipsis',
											}}
											key={header}>
											{header}
										</th>
									))}
								</tr>
							</thead>
							{data?.length > 0 && (
								<tbody>
									{data &&
										data?.map((row, index) => (
											<tr key={index}>
												{row.map((field) => (
													<td
														style={{
															whiteSpace: 'nowrap',
															width: 'auto',
															textOverflow: 'ellipsis',
														}}
														className={styles.tablActive}>
														<p>{field}</p>
													</td>
												))}
											</tr>
										))}
								</tbody>
							)}
						</table>
					</div>
				</div>
			)}
		</>
	)
}

export default Assetronerch
