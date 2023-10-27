/** @format */

import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiCrossMark } from 'react-icons/gi'
import Product from './Products'
const Basket = () => {
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [position, setPosition] = useState<number>(40)
	const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
	const [isBasketFullScreen, setIsBasketFull] = useState<boolean>(false)
	const drawrHandler = (e:DragEvent) => {
		const newPosition = (e.clientX / window.innerWidth) * 100
		isDragging ? setPosition(newPosition) : ''
	}
  
  const handleMouseMove = (e:MouseEvent) => {
		if (isDragging) {
			const newPosition = (e.clientX / window.innerWidth) * 100
			setPosition(newPosition)
		}
	}

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('mouseup',()=>setIsDragging(false))
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', ()=> setIsDragging)
		}
	}, [isDragging])
	return (
		<>
			{isBasketOpen ? (
				<div
					className={styles.basketDrawer}
					onMouseDown={() => setIsDragging(true)}>
					<div className={styles.basketBase}>
						<div className={styles.basketHeader}>
							<GiCrossMark
								className={styles.cross}
								size={'4vh'}
								onClick={() => setIsBasketOpen(false)}
							/>
						</div>
						<Product />
					</div>
				</div>
			) : (
				<div>
					<AiOutlineShoppingCart
						className={styles.basketBall}
						color={'white'}
						size={'7vh'}
						onClick={() => setIsBasketOpen(true)}
					/>
				</div>
			)}
		</>
	)
}
export default Basket
