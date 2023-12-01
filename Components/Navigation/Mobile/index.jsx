/** @format */

import { useState, useEffect } from 'react'
import styles from './index.module.css'
import Basket from '../../Basket'

const menuItems = [
	{
		name: 'محصولات',
		option: [
			{ name: 'ازینا', option: ['خاورصرشون', 'تیپ یک یکشون'] },
			{
				name: 'ازونا',
				option: [
					{ name: 'پرتقالوزادنن', option: 'دوشواریشکن' },
					{ name: 'همهدارن', option: 'ایناندارن' },
				],
			},
		],
	},
	{ name: 'سفارشی سازی', option: ['سرتاتشو', 'فقط وسطاشو', 'بغلاشو'] },
	{ name: 'پروفایل کاربری', option: ['تاریخچه خرید', 'مدیریت '] },
	{ name: 'خدمات', option: ['ماساژ غضروف'] },
	{ name: 'تماس با ما', option: ['0700600500137'] },
	{ name: 'درباره ی ما', option: ['همیشه خفناسا'] },
]

const RightSidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {}, [isOpen])
	return (
		<>
			<div className={styles.navbarConatainer}>
				{!isOpen ? (
					<button
						className={styles.openIcon}
						onClick={toggleSidebar}>
						☰
					</button>
				) : (
					<div className={styles.container}>
						{menuItems.map((menuItem, index) => (
							<div
								key={index}
								className={styles.dropdown}>
								<div className={styles.name}>
									{menuItem.name}
									<span className={styles.icon}>▼</span>
								</div>
								{menuItem.option && menuItem.option.length > 0 && (
									<div className={styles.option}>
										{menuItem.option.map((option, optionIndex) => (
											<div
												key={optionIndex}
												className={styles.option}>
													{typeof option === 'string' ? (
														option
													) : (
														<>
															{option.name}
															<span className={styles.icon}>▼</span>
															{/* {option.option && option.option.length > 0 && (
																<div className={styles.subOptions}>
																	{option.option.map(
																		(subOption, subOptionIndex) => (
																			<div
																				key={subOptionIndex}
																				className={styles.subOption}>
																				{subOption}
																			</div>
																		)
																	)}
																</div>
															)} */}
														</>
													)}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				)}
				<Basket />
			</div>
		</>
	)
}

export default RightSidebar
