/** @format */

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '../Layouts'
import Story from '../Components/Story'
import PostBox from '../Components/PostBox/5-7'
import PostBox_Three_Four_Section from '../Components/PostBox/4-3'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Layout>
				<Story />
				<PostBox />
				<PostBox_Three_Four_Section/>
			</Layout>
		</>
	)
}
