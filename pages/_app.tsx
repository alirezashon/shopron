/** @format */

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
const style = {
	backGroundColor: 'red',
}
export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
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
			<Component
				style={{ backgroundColor: 'red' }}
				{...pageProps}
			/>
		</div>
	)
}
