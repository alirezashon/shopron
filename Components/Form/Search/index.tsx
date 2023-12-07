/** @format */

import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { FaSearchengin } from 'react-icons/fa'
const SearchBarComponent: React.FC = () => {
	const [searchText, setSearchText] = useState<string>('')

	const searchBarStyles: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		margin: '2vh',
	}

	const textBoxStyles: React.CSSProperties = {
		flex: 1,
		width: '60%',
		padding: '.4vh',
		border: '.3vh ridge #c6c12c',
		borderRadius: '1vh 0 0 1vh',
		outline: 'none',
		direction: 'rtl',
	}

	const submitButtonStyles: React.CSSProperties = {
		width: '18%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '.1vh',
		backgroundColor: '#007BFF',
		color: '#fffff7',
		border: '.4vh ridge #007BFF',
		borderRadius: '0 .4vh .4vh 0',
		cursor: 'pointer',
		outline: 'none',
	}
	const searchIcon: React.CSSProperties = {
		fontSize: '4vh',
		transform: 'rotate(90deg)',
	}

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.currentTarget.value)
	}

	const handleSearch = (e: MouseEvent<HTMLInputElement>) => {
		// Prevent the default form submission behavior
		e.preventDefault()

		// Perform search logic with searchText
		console.log('Searching for:', searchText)
	}

	return (
		<div style={searchBarStyles}>
			<input
				style={textBoxStyles}
				value={searchText}
				onChange={handleInput}
				placeholder='جستجو ...'
			/>

			<div
				style={submitButtonStyles}
				onClick={handleSearch}>
				<FaSearchengin style={searchIcon} />
			</div>
		</div>
	)
}

export default SearchBarComponent
