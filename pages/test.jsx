// pages/zabbix-api-example.js

import { useEffect } from 'react';

const ZabbixApiExample = () => {
  useEffect(() => {
    // Zabbix API endpoint and credentials
    const apiEndpoint = 'http://zabbix.mobinnet.net/zabbix/api_jsonrpc.php';
    const username = 'al.akbari';
    const password = 'Ebreza^67';

    // Zabbix host name to retrieve details
    const hostName = 'Parspooyesh-APIGW_Inventory_I';

    // Zabbix API request payload for authentication
    const authPayload = {
      jsonrpc: '2.0',
      method: 'user.login',
      params: {
        user: username,
        password: password,
      },
      id: 1,
    };

    // Zabbix API request payload for getting host details by name
    const hostPayload = {
      jsonrpc: '2.0',
      method: 'host.get',
      params: {
        filter: {
          host: [hostName],
        },
        output: ['hostid', 'host', 'status'],
      },
      auth: null, // To be filled with the authentication token
      id: 2,
    };

    // Function to handle API requests
    const callZabbixApi = async () => {
      try {
        // Authenticate and get the authentication token
        const authResponse = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(authPayload),
        });

        const authResult = await authResponse.json();

        if (authResult.result) {
          // Authentication successful, fill the auth token in the hostPayload
          hostPayload.auth = authResult.result;

          // Get host details by name
          const hostResponse = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(hostPayload),
          });

          const hostResult = await hostResponse.json();

          // Log the host details
          console.log('Host Details:', hostResult.result);
        } else {
          console.error('Failed to authenticate with Zabbix API.');
        }
      } catch (error) {
        console.error('Error calling Zabbix API:', error);
      }
    };

    // Call the Zabbix API when the component mounts
    callZabbixApi();
  }, []);

  return (
    <div>
      <h1>Zabbix API Example</h1>
      {/* Add any additional content or UI components as needed */}
    </div>
  );
};

export default ZabbixApiExample;





// /** @format */

// import {Add, Remove} from './Basket/Actions'

// import { useEffect } from 'react'

// const test = () => {
// 	const data = {
// 		title: 'EBiramoza',
// 		src: '/images/alireza.jpg',
// 		price: 7777777,
// 		category: 'P&O*S^T$I%T#E^M$',
// 		description:
// 			'this post just created for happy freedome to al.akbarporJojegan',
// 		newData: {
// 			title: 'EBiramoza',
// 			src: '/images/alireza.jpg',
// 			price: 727,
// 			category: 'P&Odfb5r$I%T#E^M$',
// 			description:
// 				'this post just created for happy freedome to al.akbarporJojegan',
// 		},
// 	}
// 	// useEffect(() => {
// 	// 	;(async () => {
// 	// 		const callPostManager = await fetch('api/data/Post/Admin', {
// 	// 			method: 'POST',
// 	// 			headers: { 'Content-Type': 'application/json' },
// 	// 			body: JSON.stringify({
// 	// 				authType: '&U*P^d%A&T^e%O#Y@',
// 	// 				data,
// 	// 				user: 'al.akbarPoor',
// 	// 			}),
// 	// 		})
// 	// 		const res = await callPostManager.json()
// 	// 		console.log(res)
// 	// 	})()
// 	// }, [])

// 	return (
// 		<>
// 			<button onClick={async () => await Add('thankaGPT')}>add</button>
// 			<button onClick={async () => await Remove('thankaGPT')}>remove</button>
// 		</>
// 	)
// }
// export default test
