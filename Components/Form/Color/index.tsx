import React, { useState } from 'react'

const Color = () => {
	const [color, setColor] = useState<string>('')

	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setColor(event.target.value)
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '20px' }}>
			<p style={{ fontSize: '20px', marginBottom: '10px' }}>
				Selected Color: {color}
			</p>
			<input
				type='color'
				value={color}
				onChange={handleColorChange}
				style={{
					padding: '10px',
					border: 'none',
					backgroundColor: 'transparent',
					boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
					borderRadius: '5px',
					appearance: 'none', // Remove the default browser appearance
					cursor: 'pointer',
				}}
			/>
		</div>
	)
}

export default Color
