/** @format */

import styles from './index.module.css'
interface RadioItems {
	label: string
	borderColor: string
	bgColor: string
	selectedBorderColor: string
	default: boolean
}
const Radio = () => {
	const radioButtonsDetails: RadioItems[] = [
		{
			label: 'کوچولو',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: 'blue',
			default: true,
		},
		{
			label: 'متوسط',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			default: false,
		},
		{
			label: 'بزرگ',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			default: true,
		},
		{
			label: 'گنده',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			default: false,
		},
	]

	return (
		<>
			<div className={styles.container}>
				{radioButtonsDetails.map((obj) => (
					<div
						className={styles.radioBox}
						key={obj.label}>
						<label className={styles.label}>{obj.label}</label>
						<input
							className={styles.radio}
							type='radio'
							name='radioGroup'
							value={obj.label}
						/>
					</div>
				))}
			</div>
		</>
	)
}
export default Radio
