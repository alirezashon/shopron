/** @format */

import styles from './index.module.css'
interface InputItems {
	label: string
	borderColor: string
	bgColor: string
	selectedBorderColor: string
	type: string
	required: boolean
}
const Input = () => {
	const inputCreator: InputItems[] = [
		{
			label: 'input',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: 'blue',
			type: 'password',
			required: true,
		},
		{
			label: 'input-2',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'email',
			required: false,
		},
		{
			label: 'input-3',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'text',
			required: true,
		},
		{
			label: 'input-4',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'password',
			required: false,
		},
		{
			label: 'input-5',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'email',
			required: true,
		},
		{
			label: 'input-6',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'password',
			required: false,
		},
		{
			label: 'input-7',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'switch',
			required: true,
		},
		{
			label: 'input-8',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'color',
			required: false,
		},
		{
			label: 'input-9',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'text',
			required: true,
		},
		{
			label: 'input-10',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'password',
			required: false,
		},
		{
			label: 'input-11',
			borderColor: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedBorderColor: '#499b01',
			type: 'range',
			required: true,
		},
	]

	return (
		<>
			<div className={styles.container}>
				{inputCreator.map((obj) => (
					<div>
						{/* {obj.req} */}
						<input
							type={obj.type}
							className={styles.input}
							required
						/>
						<label className={styles.label}>{obj.label}</label>
					</div>
				))}
			</div>
		</>
	)
}
export default Input
