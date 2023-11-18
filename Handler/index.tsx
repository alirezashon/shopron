import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '../Layouts'
import Story from '../Components/Story'
import PostBox from '../Components/PostBox/5-7'
import PostBox_Three_Four_Section from '../Components/PostBox/4-3'
import Basket from '../Components/Basket'
const inter = Inter({ subsets: ['latin'] })
const Handler = () => {
    return(<>
			<Layout>
				<Basket/>
				<Story />
				{/* <PostBox />
				<PostBox_Three_Four_Section /> */}
			</Layout>
		</>)
}
export default Handler