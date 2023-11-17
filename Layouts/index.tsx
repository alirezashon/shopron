/** @format */

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from '../Components/Navigation'
const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: any) => {
	return (
		<>
			<Head>
				<title>Shopron</title>
				<meta
					name='description'
					content='top shop store'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='images/icon.png'
				/>
			</Head>
			<Navigation />
			<main>{children}</main>
		</>
	)
}
export default Layout
