/** @format */

import React, { useState, MouseEvent } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import styles from './index.module.css'
const SearchBarComponent: React.FC = () => {
	const [searchText, setSearchText] = useState<string>('')
	const [inputWidth, setInputWidth] = useState<number>(0)

	const changeTextBoxWidth = (position: string) => {
		let interval: NodeJS.Timeout

		if (position === 'open') {
			interval = setInterval(() => {
				setInputWidth((prev) => Math.min(prev + 5, 100))
			}, 3)
		} else {
			interval = setInterval(() => {
				setInputWidth((prev) => Math.max(prev - 5, 0))
			}, 3)
		}

		return () => {
			clearInterval(interval)
		}
	}

	const handleSearch = (e: MouseEvent<HTMLInputElement>) => {
		changeTextBoxWidth('open')
		e.preventDefault()
	}

	return (
		<div className={styles.searchBar}>
			<input
				style={{
					width: `${inputWidth}%`,
					display: `${inputWidth < 5 ? 'none' : 'block'}`,
				}}
				className={styles.textBox}
				value={searchText}
				onChange={(e) => setSearchText(e.currentTarget.value)}
				placeholder='جستجو ...'
			/>

			<div
				className={styles.submitButton}
				style={{
					borderRadius: `${inputWidth < 5 ? '5vh' : '0 0.4vh 0.4vh 0'}`,
					width: `${inputWidth < 5 && '7vh'}`,
					height: `${inputWidth < 5 ? '7vh' : '5vh'}`,
					border:`${inputWidth > 5 && 'none'}`
				}}
				onClick={handleSearch}>
				<FaSearchengin className={styles.searchIcon} />
			</div>
		</div>
	)
}

export default SearchBarComponent
