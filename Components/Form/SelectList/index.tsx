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
			label: 'بده بیاد بابا حوصلتو نداریم',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: 'blue',
		},
		{
			label: 'تو برو منم میام',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'پیک ثباتی رباتینابیاد',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'بگو جمعه بیاد',
			selectList: '#ffa20d',
			bgColor: '#ffe8a2',
			selectedselectList: '#499b01',
		},
		{
			label: 'چیز بخوره تو سرت مرتیکه',
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
