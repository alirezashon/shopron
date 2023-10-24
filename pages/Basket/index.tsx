/** @format */

import { useState } from 'react'
import styles from './index.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Basket = () => {
	const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
	return (
		<>
			{isBasketOpen ? (
                <div>
                    
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
