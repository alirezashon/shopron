/** @format */

import React, { useState } from 'react'

const SearchBarComponent = () => {
	const [searchText, setSearchText] = useState('')

	const searchBarStyles = {
		display: 'flex',
		alignItems: 'center',
		width: '300px',
		margin: '20px',
	}

	const textBoxStyles = {
		flex: 1,
		padding: '10px',
		border: '1px solid #ccc',
		borderRadius: '4px 0 0 4px',
		outline: 'none',
		direction: 'ltr', // Ensure left-to-right text direction
	}

	const submitButtonStyles = {
		padding: '10px',
		backgroundColor: '#007BFF',
		color: '#fff',
		border: '1px solid #007BFF',
		borderRadius: '0 4px 4px 0',
		cursor: 'pointer',
		outline: 'none',
	}

	const handleInput = (e) => {
		setSearchText(e.currentTarget.innerText)
	}

	const handleSearch = () => {
		// Perform search logic with searchText
		console.log('Searching for:', searchText)
	}

	return (
		<div style={searchBarStyles}>
			<input
				style={textBoxStyles}
				onInput={handleInput}
			/>

			<input
				value='  Search'
				type='submit'
				style={submitButtonStyles}
				onClick={handleSearch}
			/>
		</div>
	)
}

export default SearchBarComponent
