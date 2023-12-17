/** @format */

import { useState, useEffect } from 'react'
import styles from './index.module.css'
import Basket from '../../Basket'
import { GiCrossMark } from 'react-icons/gi'
import Search from '../../Form/Search'
import { PiUserCircleGearFill } from 'react-icons/pi'

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
	const [isOptionOpen, setIsOptionOpen] = useState([])
	const [isSubOptionOpen, setIsSubOptionOpen] = useState([])
	
	const toggleOption = (index) => {
		setIsOptionOpen((prev) => ({
			...prev,
			[index]: !prev[index],
		}))
	}
	const toggleSubOption = (index) => {
		setIsSubOptionOpen((prev) => ({
			...prev,
			[index]: !prev[index],
		}))
	}
	useEffect(() => {
		const closeNav = (event) => {
			const windowWidth = window.innerWidth
			const clickX = event.clientX
	
			if (isOpen && clickX < windowWidth * 0.4) {
				setIsOpen(false)
			}
		}
		window.addEventListener('click', closeNav)
		
		return () => {
			window.removeEventListener('click', closeNav)
		}
	}, [isOpen])

	return (
		<>
			<div className={styles.navbarConatainer}>
				{!isOpen && (
					<button
						className={styles.openIcon}
						onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
				)}
				<div
					className={styles.container}
					style={{
						transform: `${isOpen ? 'translateX(0vw)' : 'translateX(60vw)'}`,
					}}>
					<div className={styles.header}>
						<div className={styles.cross}>
							<GiCrossMark onClick={() => setIsOpen(!isOpen)} />
						</div>
						<div className={styles.searchBox}>
							<Search />
						</div>
					</div>
					{menuItems.map((menuItem, index) => (
						<div
							key={index}
							className={styles.dropdown}>
							<div
								className={styles.name}
								onClick={() => toggleOption(index)}>
								{menuItem.name}
								<span className={styles.icon}>▼</span>
							</div>
							{menuItem.option &&
								menuItem.option.length > 0 &&
								isOptionOpen[index] && (
									<div className={styles.option}>
										{menuItem.option.map((option, optionIndex) => (
											<div
												key={optionIndex}
												className={styles.option}
												onClick={() => toggleSubOption(optionIndex)}>
												{typeof option === 'string' ? (
													option
												) : (
													<>
														{option.name}
														<span className={styles.icon}>▼</span>
														{option.option &&
															option.option.length > 0 &&
															isSubOptionOpen[optionIndex] && (
																<div className={styles.subOptions}>
																	{Array.isArray(option.option) === true
																		? option.option.map(
																				(subOption, subOptionIndex) => (
																					<div
																						key={subOptionIndex}
																						className={styles.subOption}>
																						{typeof subOption === 'object'
																							? subOption.name
																							: subOption}
																					</div>
																				)
																		  )
																		: ''}
																</div>
															)}
													</>
												)}
											</div>
										))}
									</div>
								)}
						</div>
					))}
				</div>
				<div>
					<div className={styles.centerSection}>
						<marquee
							behavior='scroll'
							direction='left'>
							<span>
								This is a sample text inside the marquee. It will scroll from
								right to left.
							</span>
						</marquee>
						<div className={styles.searchBox}>
							<Search />
						</div>
					</div>
				</div>
					<PiUserCircleGearFill size={ '6vh'} />
				<Basket />
			</div>
		</>
	)
}

export default RightSidebar
