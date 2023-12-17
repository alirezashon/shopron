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
	const [showOptions, setShowOptions] = useState<boolean>(true)
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
			currentScrollPos < 799 ? setShowOptions(true) : setShowOptions(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div
				draggable={true}
				className={styles.navDrager}
				onMouseOver={() =>
					navHeight === 60 ? setNavHeight(13) : setNavHeight(60)
				}
				style={{ height: `${navHeight}vh` }}>
				<div>
					<div
						onClick={() =>
							navHeight === 67 ? setNavHeight(13) : setNavHeight(67)
						}>
						{navHeight < 22 ? (
							<PiArrowFatLinesDownThin />
						) : (
							<PiArrowFatLinesUpThin />
						)}
					</div>
				</div>
			</div>
			<div
				style={{ height: `${navHeight - 4}vh` }}
				className={`${styles.scrollingDiv} ${
					showOptions ? styles.show : styles.hide
				}`}>
				<div
					className={`${styles.itemsBox} ${
						navHeight > 55 ? styles.openItemsBox : styles.closeItemsBox
					}`}>
					{items.map((menuItem, index) => (
						<div
							key={menuItem.link}
							className={`${navHeight < 55 && styles.link}`}>
							<p className={styles.menuItem}>{menuItem.label}</p>
							<div
								className={styles.subOptionBox}
								style={{ display: `${navHeight < 55 ? 'none' : 'block'}` }}>
								{navHeight > 55 &&
									dropdownItems[index].map((option, subIndex) => (
										<div
											key={option.link}
											className={`${styles.subOption} ${
												isSubOptionOpen[index] ? styles.showSubOption : ''
											}`}>
											<Link href={option.link}>
												<p className={styles.subOptionItem}>{option.label}</p>
											</Link>
										</div>
									))}
							</div>
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
			</div>
		</>
	)
}

export default Menu
