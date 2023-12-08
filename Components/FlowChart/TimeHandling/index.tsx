/** @format */

import { CSSProperties } from 'react'

interface Style {
	container: CSSProperties
	inputBox: CSSProperties
}
const TimeHandling: React.FC = () => {
	return (
		<>
			<h1>TimeHandling</h1>
			<div style={styles.container}>
				<div style={styles.inputBox}>
					<input type='date' />
					<label>Date</label>
				</div>
				<div style={styles.inputBox}>
					<input type='time' />
					<label>Time</label>
                </div>
                
			</div>
		</>
	)
}
export default TimeHandling

const styles: Style = {
	container: {},
	inputBox: {},
}
