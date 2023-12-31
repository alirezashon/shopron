/** @format */

import React, { useState, useEffect, useMemo } from 'react'
import styles from './index.module.css'

interface CheckboxItem {
	label: string
	borderColor: string
	bgColor: string
	selectedBorderColor: string
	default: boolean
}

const CheckBox = () => {
	const [checkedItems, setCheckedItems] = useState<string[]>([])
	const checkBoxCreator: CheckboxItem[] = useMemo(
		() => [
			{
				label: 'selectAll',
				borderColor: 'red',
				bgColor: 'pink',
				selectedBorderColor: 'purple',
				default: false,
			},
			{
				label: 'checkBseeeeeeeeeeeeeeeeeseeeeeeeeeox-1',
				borderColor: '#ffa20d',
				bgColor: '#ffe8a2',
				selectedBorderColor: 'blue',
				default: true,
			},
			{
				label: 'checkBox-2',
				borderColor: '#ffa20d',
				bgColor: '#ffe8a2',
				selectedBorderColor: '#499b01',
				default: false,
			},
			// ... (add other items as needed)
		],
		[] // Empty dependency array since checkBoxCreator doesn't depend on props or state
	)

	useEffect(() => {
		// Check items with default true after the component mounts
		const defaultCheckedItems = checkBoxCreator
			.filter((item) => item.default)
			.map((item) => item.label)
		setCheckedItems(defaultCheckedItems)
	}, [checkBoxCreator])

	const handleCheckboxChange = (label: string) => {
		if (label === 'selectAll') {
			if (checkedItems.length === checkBoxCreator.length) {
				setCheckedItems([])
			} else {
				// Check all if selectAll is unchecked
				const allLabels = checkBoxCreator
					.filter((item) => item.label)
					.map((item) => item.label)
				setCheckedItems(allLabels)
			}
		} else {
			if (checkedItems.includes(label)) {
				setCheckedItems(checkedItems.filter((item) => item !== label))
			} else {
				setCheckedItems([...checkedItems, label])
			}
		}
	}

	return (
		<>
			<div className={styles.checkBoxContainer}>
				{checkBoxCreator.map((checkbox) => (
					<div
						className={styles.checkBoxCover}
						key={checkbox.label}>
						<label className={styles.label}>{checkbox.label}</label>
						<input
							style={{
								borderColor: checkedItems.includes(checkbox.label)
									? checkbox.selectedBorderColor
									: checkbox.borderColor,
								backgroundColor: checkedItems.includes(checkbox.label)
									? checkbox.bgColor
									: '',
							}}
							className={styles.checkboxInput}
							type='checkbox'
							checked={
								checkbox.label === 'selectAll'
									? checkedItems.length === checkBoxCreator.length - 1
									: checkedItems.includes(checkbox.label)
							}
							onChange={() => handleCheckboxChange(checkbox.label)}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default CheckBox
