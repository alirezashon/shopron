/** @format */

import React, { useState } from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'
import styles from './index.module.css'

const ChipsInput = () => {
	const [inputValue, setInputValue] = useState('')
	const [chips, setChips] = useState([])

	const handleInputChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleInputKeyPress = (event) => {
		if (event.key === 'Enter' && inputValue.trim() !== '') {
			setChips([...chips, inputValue])
			setInputValue('') // Clear the input
		}
	}

	const handleRemoveChip = (index) => {
		const newChips = [...chips]
		newChips.splice(index, 1)
		setChips(newChips)
	}

	return (
		<div className={styles.chipBox}>
			<input
				type='text'
				placeholder='نکات افزودنی ...'
				value={inputValue}
				onChange={handleInputChange}
				onKeyPress={handleInputKeyPress}
				className={styles.input}
			/>
 				{chips.map((chip, index) => (
					<div
						key={index}
						className={styles.chip}>
						{chip}
							<BsFillXCircleFill
								size={'3vh'}
 							className={styles.removeIcon}
							onClick={() => handleRemoveChip(index)}
						/>
					</div>
				))}
 		</div>
	)
}

export default ChipsInput
