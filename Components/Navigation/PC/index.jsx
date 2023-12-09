/** @format */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './inedx.module.css'
import Search from '../../Form/Search'

const Menu = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [showDiv, setShowDiv] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState(null)
	const [isSubOptionOpen, setIsSubOptionOpen] = useState([])
	const [navHeight, setNavHeight] = useState(13)

	const items = [
		{ label: 'محصولات', link: '/products' },
		{ label: 'خدمات', link: '/Customization' },
		{ label: 'تعرفه قیمت', link: '/present' },
		{ label: 'لیست متخصصین', link: '/contact-us' },
	]

	const dropdownItems = [
		[
			{ label: 'گوشواره', link: '/rings' },
			{ label: 'دستبند', link: '/earrings' },
			{ label: 'گردنبند', link: '/necklaces' },
			{ label: 'انگشتر', link: '/bracelets' },
		],
		[
			{ label: 'گوشواره', link: '/rings' },
			{ label: 'دستبند', link: '/earrings' },
			{ label: 'گردنبند', link: '/necklaces' },
		],
		[
			{ label: 'انگشتر', link: '/bracelets' },
			{ label: 'پابند', link: '/watches' },
		],
		[
			{ label: 'گوشواره', link: '/rings' },
			{ label: 'دستبند', link: '/earrings' },
		],
	]

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY
			currentScrollPos < 799 ? setShowDiv(true) : setShowDiv(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleItemMouseOver = (index) => {
		setIsOpen(true)
		setSelectedItem(index)
	}

	const handleItemMouseLeave = () => {
		setIsOpen(false)
		setSelectedItem(null)
	}

	const handleSubOptionMouseEnter = (index) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: true }))
	}

	const handleSubOptionMouseLeave = (index) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: false }))
	}

	const handleSubOptionClick = (index) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: true }))
	}

	return (
		<>
			<div
				draggable={true}
				className={styles.navDrager}
				onClick={() => setNavHeight(60)}
				style={{ height: `${navHeight}vh` }}
				onDrag={(e) => console.log(e)}></div>
			<div
				style={{ height: `${navHeight}vh` }}
				className={`${styles.scrollingDiv} ${
					showDiv ? styles.show : styles.hide
				}`}>
				{items.map((menuItem, index) => (
					<div
						key={menuItem.link}
						className={styles.link}
						onMouseOver={() => handleItemMouseOver(index)}
						onMouseLeave={handleItemMouseLeave}>
						<p className={styles.toggleButton}>{menuItem.label}</p>
						{isOpen &&
							selectedItem !== null &&
							dropdownItems[selectedItem] &&
							dropdownItems[selectedItem].map((option, subIndex) => (
								<div
									key={option.link}
									className={`${styles.subOption} ${
										isSubOptionOpen[selectedItem] ? styles.showSubOption : ''
									}`}
									onMouseEnter={() => handleSubOptionMouseEnter(index)}
									onMouseLeave={() => handleSubOptionMouseLeave(index)}
									onClick={() => handleSubOptionClick(index)}>
									<Link href={option.link}>
										<p className={styles.subOptionItem}>{option.label}</p>
									</Link>
								</div>
							))}
					</div>
				))}
				<div className={styles.switchWrapper}>
					<label className={styles.label}>ازاینا</label>
					<input
						type='checkbox'
						className={styles.switch}
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
					/>
					<label className={styles.label}>ازونا</label>
				</div>
			</div>
		</>
	)
}

export default Menu
// import React from 'react'
// import Link from 'next/link'
// import styles from './inedx.module.css'
// import { useState, useEffect } from 'react'
// import Search from '../../Form/Search'
// const Menu = () => {
// 	const [isChecked, setIsChecked] = useState(false)
// 	const [showDiv, setShowDiv] = useState(true)
// 	const [isOpen, setIsOpen] = useState(false)
// 	const [isOptionOpen, setIsOptionOpen] = useState([])
// 	const [isSubOptionOpen, setIsSubOptionOpen] = useState([])
// 	const [navHeight, setNavHeight] = useState(13)

// 	const items = [
// 		{ label: 'محصولات', link: '/products' },
// 		{ label: 'خدمات', link: '/Customization' },
// 		{ label: 'تعرفه قیمت', link: '/present' },
// 		{ label: 'لیست متخصصین', link: '/contact-us' },
// 	]
// 	const dropdownItems = [
// 		[
// 			{ label: 'گوشواره', link: '/rings' },
// 			{ label: 'دستبند', link: '/earrings' },
// 			{ label: 'گردنبند', link: '/necklaces' },
// 			{ label: 'انگشتر', link: '/bracelets' },
// 			{ label: 'پابند', link: '/watches' },
// 		],
// 		[
// 			{ label: 'گوشواره', link: '/rings' },
// 			{ label: 'دستبند', link: '/earrings' },
// 			{ label: 'گردنبند', link: '/necklaces' },
// 			{ label: 'انگشتر', link: '/bracelets' },
// 			{ label: 'پابند', link: '/watches' },
// 		],
// 	]

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			const currentScrollPos = window.scrollY
// 			currentScrollPos < 799 ? setShowDiv(true) : setShowDiv(false)
// 		}

// 		window.addEventListener('scroll', handleScroll)

// 		return () => window.removeEventListener('scroll', handleScroll)
// 	}, [])

// 	return (
// 		<>
// 			<div
// 				draggable={true}
// 				className={styles.navDrager}
// 				onClick={()=>setNavHeight(60)}
// 				style={{ height: `${navHeight}vh` }}
// 			onDrag={(e)=>console.log(e)}></div>
// 			<div
// 				style={{ height: `${navHeight}vh` }}
// 				className={`${styles.scrollingDiv} ${
// 					showDiv ? styles.show : styles.hide
// 				}`}>
// 				{items.map((menuItem, index) => (
// 					<Link
// 						key={menuItem.link}
// 						className={styles.link}
// 						href={menuItem.link}>
// 						<p
// 							className={styles.toggleButton}
// 							onMouseOver={() => setIsOpen(!isOpen)}>
// 							{menuItem.label}
// 						</p>
// 						{isOpen &&
// 							dropdownItems.map((options) => <p>{options[0].label}</p>)}
// 					</Link>
// 				))}

// 				<div className=''>
// 					<div className={styles.container}>
// 						{isOpen && (
// 							<div
// 								onMouseEnter={() => setIsOpen(true)}
// 								onMouseLeave={() => setIsOpen(false)}
// 								className={styles.dropdown}>
// 								{dropdownItems[0].map((dropdownItems, index) => (
// 									<Link
// 										key={dropdownItems.link}
// 										className={styles.link}
// 										href={dropdownItems.link}>
// 										<p className={styles.dropdownItem}>{dropdownItems.label}</p>
// 									</Link>
// 								))}
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 				<div className={styles.switchWrapper}>
// 					<label className={styles.label}>ازاینا</label>

// 					<input
// 						type='checkbox'
// 						className={styles.switch}
// 						checked={isChecked}
// 						onChange={() => setIsChecked(!isChecked)}
// 					/>
// 					<label className={styles.label}>ازونا</label>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Menu
