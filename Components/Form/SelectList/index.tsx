/** @format */

import styles from './index.module.css'
interface SelectListItem {
	label: string
	selectList: string
	bgColor: string
	selectedselectList: string
}

const selectList = () => {
	const selectListCreator: SelectListItem[] = [
		{
			label: 'نحوه چیز کردنش',
			selectList: 'red',
			bgColor: 'pink',
			selectedselectList: 'purple',
		},
		{
			label: 'checkBseeeeeeeeeeeeeeeeeseeeeeeeeeox-1',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: 'blue',
		},
		{
			label: 'checkBox-2',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'checkBox-3',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'checkBox-4',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'checkBox-5',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
	]

	return (
		<>
			<select className={styles.selectList}>
				{selectListCreator.map((obj) => (
					<option>{obj.label}</option>
				))}
			</select>
		</>
	)
}
export default selectList
