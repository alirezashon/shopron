/** @format */

import Head from 'next/head'
import { Inter } from 'next/font/google'
import PostBox from '../Components/PostBox'
import Layout from '../Layouts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Layout>
				<PostBox />
			</Layout>
		</>
	)
}
