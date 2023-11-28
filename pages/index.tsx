import React, { useEffect, useState } from 'react'
import Login from '../Components/Login'
import Handler from '../Handler'
import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next'
import PostsDisplay from '../Components/PostBox/4-3'
import Posts from '../Components/PostBox/5-7'
import Story from '../Components/Story'
import Carouselali from '../Components/Carouselali'
interface Props {
	posts: [
		{
			_id: string
			title: string
			src: string
			price: number
			category: string
			quantity: number
			description: string
			inBasket?: number
		}
	]
}
const RootPage: NextPage<Props> = ({ posts }) => {
	const [token, setToken] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const validator = async (token: string) => {
		try {
			const response = await fetch('/api/Auth/Session/Validator', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					authType: 'ClIeNt_ValidaTe*%',
					token: token,
				}),
			})
			await response.json()
			if (response.status === 200) {
				setToken(true)
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const session = sessionStorage.getItem('token')
		session ? validator(session) : setLoading(false)
	}, [])

	return (
		<>
			{loading ? (
				<Image
					style={{ width: '100vw', height: '100vh' }}
					src={'/images/ele.jpg'}
					width={2222}
					height={2222}
					alt='Loading...'
				/>
			) : token ? (
				<>
					<Handler />
					<Story data={posts} />
					<Carouselali />
					<PostsDisplay posts={posts} />
					<Posts posts={posts} />
				</>
			) : (
				<Login setToken={setToken} />
			)}
		</>
	)
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	// Replace this with your logic to fetch posts from an external API
	const res = await fetch('http://localhost:3000/api/data/Post/Client', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			category: '@L$L%O%F#D%M^',
			authType: 'G&E!T*P^R$O#D$U^C@T*S',
		}),
	})
	const callPosts = await res.json()
	const posts = callPosts.products

	return {
		props: {
			posts,
		},
	}
}

export default RootPage


