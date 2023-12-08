	/** @format */

// // pages/zabbix-api-example.js

// import { useEffect } from 'react';

// const ZabbixApiExample = () => {
//   useEffect(() => {
//     // Zabbix API endpoint and credentials
//     const apiEndpoint = 'http://zabbix.mobinnet.net/zabbix/api_jsonrpc.php';
//     const username = 'al.akbari';
//     const password = 'Ebreza^67';

//     // Zabbix host name to retrieve details
//     const hostName = 'Parspooyesh-APIGW_Inventory_I';

//     // Zabbix API request payload for authentication
//     const authPayload = {
//       jsonrpc: '2.0',
//       method: 'user.login',
//       params: {
//         user: username,
//         password: password,
//       },
//       id: 1,
//     };

//     // Zabbix API request payload for getting host details by name
//     const hostPayload = {
//       jsonrpc: '2.0',
//       method: 'host.get',
//       params: {
//         filter: {
//           host: [hostName],
//         },
//         output: ['hostid', 'host', 'status'],
//       },
//       auth: null, // To be filled with the authentication token
//       id: 2,
//     };

//     // Function to handle API requests
//     const callZabbixApi = async () => {
//       try {
//         // Authenticate and get the authentication token
//         const authResponse = await fetch(apiEndpoint, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(authPayload),
//         });

//         const authResult = await authResponse.json();

//         if (authResult.result) {
//           // Authentication successful, fill the auth token in the hostPayload
//           hostPayload.auth = authResult.result;

//           // Get host details by name
//           const hostResponse = await fetch(apiEndpoint, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(hostPayload),
//           });

//           const hostResult = await hostResponse.json();

//           // Log the host details
//           console.log('Host Details:', hostResult.result);
//         } else {
//           console.error('Failed to authenticate with Zabbix API.');
//         }
//       } catch (error) {
//         console.error('Error calling Zabbix API:', error);
//       }
//     };

//     // Call the Zabbix API when the component mounts
//     callZabbixApi();
//   }, []);

//   return (
//     <div>
//       <h1>Zabbix API Example</h1>
//       {/* Add any additional content or UI components as needed */}
//     </div>
//   );
// };

// export default ZabbixApiExample;

// /** @format */

// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import PostsDisplay from '../Components/PostBox/4-3'
interface HomeProps {
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

const IndexPage: NextPage<HomeProps> = ({ posts }) => {
	return (
		<div>
			<h1>Your Page Title</h1>
			<PostsDisplay posts={posts} />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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

export default IndexPage

// import { useEffect } from 'react'

// const test = () => {
// 	const data = [
// 	{
//  		title: 'EBiramoza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// 	{
//  		title: 'AmoAliReza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// 	{
//  		title: 'Kalim',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		quantity: 22,
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 	},
// ]
// 	useEffect(() => {
//     ; (async () => {
//       data.map(async(post) => {

//         const callPostManager = await fetch('api/data/Post/Admin', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             authType: '!I@N$e$r%T&O*',
//             data:post,
//             user: 'al.akbarPoor',
//           }),
//         })
//         // const res = await callPostManager.json()
//         console.log(res)
//       })
// 		})()
// 	}, [])

// 	return (
// 		<>
// 		</>
// 	)
// }
// export default test
