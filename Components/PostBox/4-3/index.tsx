import Image from 'next/image'
import styles from './index.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState, useEffect } from 'react'

interface Post {
	_id: string;
	title: string;
	description: string;
	price: number;
	src: string;
}

const PostBox: React.FC = () => {
	const posts: Post[] = [
		{
			_id: '6',
			title: 'Post 1',
			description: 'Description of Post 1',
			price: 10,
			src: '/images/ali.jpg',
		},
		{
			_id: '5',
			title: 'Post 2',
			description: 'Description of Post 2',
			price: 20,
			src: '/images/ali.jpg',
		},
		{
			_id: '4',
			title: 'Post 3',
			description: 'Description of Post 3',
			price: 30,
			src: '/images/ali.jpg',
		},
		{
			_id: '3',
			title: 'Post 4',
			description: 'Description of Post 4',
			price: 40,
			src: '/images/ali.jpg',
		},
	];

	const [postStates, setPostStates] = useState(
		posts.map((post) => ({
			_id: post._id,
			isAddToBasket: false,
			quantity: 0,
		}))
	);

	const [basket, setBasket] = useState<{ products: Post[]; price: number }>({
		products: [],
		price: 0,
	});

	const handleAddToBasket = (_id: string) => {
		setPostStates((prevStates) =>
			prevStates.map((postState) =>
				postState._id === _id
					? { ...postState, isAddToBasket: true, quantity: postState.quantity + 1 }
					: postState
			)
		);

		const selectedPost = posts.find((post) => post._id === _id);

		if (selectedPost) {
			const updatedBasket = {
				products: [...basket.products, selectedPost],
				price: basket.price + selectedPost.price,
			};

			setBasket(updatedBasket);

			localStorage.setItem('Basket', JSON.stringify(updatedBasket));
		}
	};

	const handleIncrement = (_id: string) => {
		setPostStates((prevStates) =>
			prevStates.map((postState) =>
				postState._id === _id
					? { ...postState, quantity: postState.quantity + 1 }
					: postState
			)
		);

		const selectedPost = posts.find((post) => post._id === _id);

		if (selectedPost) {
			const updatedBasket = {
				products: [...basket.products, selectedPost],
				price: basket.price + selectedPost.price,
			};

			setBasket(updatedBasket);

			localStorage.setItem('Basket', JSON.stringify(updatedBasket));
		}
	};

	const handleDecrement = (_id: string) => {
		setPostStates((prevStates) =>
			prevStates.map((postState) =>
				postState._id === _id && postState.quantity > 0
					? { ...postState, quantity: postState.quantity - 1 }
					: postState
			)
		);

		const selectedPost = posts.find((post) => post._id === _id);

		if (selectedPost) {
			const updatedBasket = {
				products: [...basket.products],
				price: basket.price - selectedPost.price,
			};

			setBasket(updatedBasket);

			localStorage.setItem('Basket', JSON.stringify(updatedBasket));
		}
	};

	useEffect(() => {
		const storedBasket = localStorage.getItem('Basket');

		if (storedBasket) {
			try {
				const parsedBasket = JSON.parse(storedBasket);
				setBasket(parsedBasket);

				const updatedPostStates = postStates.map((postState) => {
					const foundProduct = parsedBasket.products.find((product:any) => product._id === postState._id);
					if (foundProduct) {
						return {
							...postState,
							isAddToBasket: true,
							quantity: foundProduct.quantity || 0,
						};
					}
					return postState;
				});

				setPostStates(updatedPostStates);
			} catch (error) {
				console.error('Error parsing JSON from local storage:', error);
			}
		}
	}, []);

	return (
		<div className={styles.postsBox}>
			<div className={styles.innerPostsBox}>
				{posts.map((obj, index) => (
					<div className={styles.postBox} key={obj._id}>
						<div className={styles.innerPostBox}>
							<h6 className={styles.title}>{obj.title}</h6>
							<Image
								src={obj.src}
								alt={obj.description}
								width={200}
								height={200}
								className={styles.image}
							/>
							{postStates[index].isAddToBasket ? (
								<div className={styles.priceBasketBox}>
									<div className={styles.innerPriceBasketBox}>
										<div className={styles.priceBasket}>
											<p className={styles.productBasketPrice}>{obj.price}</p>
											<div className={styles.productBasketicon}>
												<button onClick={() => handleDecrement(obj._id)}>-</button>
												<span>{postStates[index].quantity}</span>
												<button onClick={() => handleIncrement(obj._id)}>+</button>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className={styles.priceBasketBox}>
									<div className={styles.innerPriceBasketBox}>
										<div className={styles.priceBasket}>
											<div
												className={styles.icon}
												onClick={() => handleAddToBasket(obj._id)}
											>
												<AiOutlineShoppingCart
													size={'3vh'}
													color={'rgb(255,255,255)'}
												/>
											</div>
											<p className={styles.price}>{obj.price}</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostBox;
