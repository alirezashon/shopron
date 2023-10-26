
// import { useState } from 'react'
// import styles from './index.module.css'
// import { AiOutlineShoppingCart } from 'react-icons/ai'

// const Basket = () => {
// 	const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
// 	return (
// 		<>
// 			{isBasketOpen ? (
//                 <div>
                    
//                 </div>
// 			) : (
// 				<div>
// 					<AiOutlineShoppingCart
// 						className={styles.basketBall}
// 						color={'white'}
//                             size={'7vh'}
//                             onClick={() => setIsBasketOpen(true)}
// 					/>
// 				</div>
// 			)}
// 		</>
// 	)
// }
// export default Basket





import React from 'react';

const ShapeWithImage = () => {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Create a custom path for the shape */}
      <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" fill="lightblue" />

      {/* Insert an image inside the shape */}
      <clipPath id="shapeClip">
        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
      </clipPath>

      <image x="10" y="10" width="180" height="180" xlinkHref="/images/ali.jpg" clipPath="url(#shapeClip)" />
    </svg>
  );
};

export default ShapeWithImage;
