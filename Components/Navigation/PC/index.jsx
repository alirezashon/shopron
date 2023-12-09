/** @format */
import React from 'react'
import Link from 'next/link'
import styles from './inedx.module.css'
import { useState, useEffect } from 'react'

const Menu = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [showDiv, setShowDiv] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [isOptionOpen, setIsOptionOpen] = useState([])
	const [isSubOptionOpen, setIsSubOptionOpen] = useState([])

	const closeNav = (event) => {
		const windowWidth = window.innerWidth
		const clickX = event.clientX

		if (isOpen && clickX < windowWidth * 0.4) {
			setIsOpen(false)
		}
	}

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
		window.addEventListener('click', closeNav)

		return () => {
			window.removeEventListener('click', closeNav)
		}
	}, [isOpen])

	const items = [
		{ label: 'محصولات', link: '/products' },
		{ label: 'خدمات', link: '/Customization' },
		{ label: 'تعرفه قیمت', link: '/present' },
		{ label: 'لیست متخصصین', link: '/contact-us' },
		{ label: 'تماس با ما', link: '/contact-us' },
		{ label: 'درباره ما', link: '/about-us' },
	]
	const dropdownItems = [
		[
			{ label: 'گوشواره', link: '/rings' },
			{ label: 'دستبند', link: '/earrings' },
			{ label: 'گردنبند', link: '/necklaces' },
			{ label: 'انگشتر', link: '/bracelets' },
			{ label: 'پابند', link: '/watches' },
		],
		[
			{ label: 'گوشواره', link: '/rings' },
			{ label: 'دستبند', link: '/earrings' },
			{ label: 'گردنبند', link: '/necklaces' },
			{ label: 'انگشتر', link: '/bracelets' },
			{ label: 'پابند', link: '/watches' },
		],
	]

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY
			currentScrollPos < 70 ? setShowDiv(true) : setShowDiv(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div
				className={`${styles.scrollingDiv} ${
					showDiv ? styles.show : styles.hide
				}`}>
				{items.map((menuItem, index) => (
					<Link
						key={menuItem.link}
						className={styles.link}
						href={menuItem.link}>
						<p
							className={styles.menuItem}
							// onMouseEnter={() => setIsOpen(true)}
							// onMouseLeave={() => setIsOpen(true)}
						onMouseOver={()=> setIsOpen(!isOpen)}>
							{menuItem.label}
						</p>
						{isOpen &&
							dropdownItems.map((options) => <p>{options[0].label}</p>)}
					</Link>
				))}

				<div className=''>
					<div className={styles.container}>
						<div
							className={styles.toggleButton}
							onMouseEnter={() => setIsOpen(true)}
							onMouseLeave={() => setIsOpen(false)}>
							نوع محصول
						</div>
						{isOpen && (
							<div
								onMouseEnter={() => setIsOpen(true)}
								onMouseLeave={() => setIsOpen(false)}
								className={styles.dropdown}>
								{dropdownItems[0].map((dropdownItems, index) => (
									<Link
										key={dropdownItems.link}
										className={styles.link}
										href={dropdownItems.link}>
										<p className={styles.dropdownItem}>{dropdownItems.label}</p>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
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
