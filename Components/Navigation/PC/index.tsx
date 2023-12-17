/** @format */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import Search from '../../Form/Search'
import Basket from '../../Basket'
import { PiArrowFatLinesDownThin, PiArrowFatLinesUpThin } from 'react-icons/pi'

interface MenuItem {
	label: string
	link: string
}

const Menu = () => {
	const [showDiv, setShowDiv] = useState<boolean>(true)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedItem, setSelectedItem] = useState<number | null>(null)
	const [isSubOptionOpen, setIsSubOptionOpen] = useState<{
		[key: number]: boolean
	}>({})
	const [navHeight, setNavHeight] = useState<number>(13)

	const items: MenuItem[] = [
		{ label: 'محصولات', link: '/products' },
		{ label: 'خدمات', link: '/Customization' },
		{ label: 'تعرفه قیمت', link: '/present' },
		{ label: 'لیست متخصصین', link: '/contact-us' },
	]

	const dropdownItems: MenuItem[][] = [
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

	const handleItemMouseOver = (index: number) => {
		setIsOpen(true)
		setSelectedItem(index)
	}

	const handleItemMouseLeave = () => {
		setIsOpen(false)
		setSelectedItem(null)
	}

	const handleSubOptionMouseEnter = (index: number) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: true }))
	}

	const handleSubOptionMouseLeave = (index: number) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: false }))
	}

	const handleSubOptionClick = (index: number) => {
		setIsSubOptionOpen((prev) => ({ ...prev, [index]: true }))
	}

	return (
		<>
			<div
				draggable={true}
				className={styles.navDrager}
				onMouseOver={() =>
					navHeight === 60 ? setNavHeight(13) : setNavHeight(60)
				}
				style={{ height: `${navHeight}vh` }}>
 					<div
						onClick={() =>
							navHeight === 67 ? setNavHeight(13) : setNavHeight(67)
						}
					
					onMouseOver={()=>null}>
						{navHeight < 22 ? (
							<PiArrowFatLinesDownThin />
						) : (
							<PiArrowFatLinesUpThin />
						)}
					</div>
 			</div>
			<div
				style={{ height: `${navHeight - 4}vh` }}
				className={`${styles.scrollingDiv} ${
					showDiv ? styles.show : styles.hide
				}`}>
				{items.map((menuItem, index) => (
					<div
						key={menuItem.link}
						className={styles.link}
						onMouseOver={() => handleItemMouseOver(index)}
						onMouseLeave={handleItemMouseLeave}>
						<p className={styles.menuItem}>{menuItem.label}</p>
					</div>
				))}

				<div className={styles.componentBox}>
					<div className={styles.basket}>
						<Basket />
					</div>
					<div className={styles.search}>
						<Search />
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu

export const MenuOptions = () => {
	return (
		<>
			<div></div>
		</>
	)
}
