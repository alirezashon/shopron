/** @format */

import { useState } from 'react'
import styles from './index.module.css'
const Switch = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
	return (
		<>
			<div className={styles.switchWrapper}>
				<label
					className={`${styles.label} ${
						isChecked ? '' : styles.selectedRadio
					}`}>
					باصاحاب
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
					بیصاحاب
				</label>
			</div>{' '}
		</>
	)
}
export default Switch
