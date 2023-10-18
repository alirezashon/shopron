/** @format */

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
const style = {
	backGroundColor: 'red',
}
export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Component
				style={{ backgroundColor: 'red' }}
				{...pageProps}
			/>
		</div>
	)
}
