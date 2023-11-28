// /** @format */

// // Map.js
// import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl'

// const Map = () => {
// 	const [viewport, setViewport] = useState({
// 		width: '100%',
// 		height: '400px',
// 		latitude: 37.7749, // Initial latitude (e.g., San Francisco)
// 		longitude: -122.4194, // Initial longitude (e.g., San Francisco)
// 		zoom: 10, // Initial zoom level
// 	})

// 	return (
// 		<>
// 			<ReactMapGL
// 				{...viewport}
// 				mapboxApiAccessToken='pk.eyJ1IjoiYWxpcmV6YWZoaSIsImEiOiJjbHBpYnM2NGMwYmU4Mmtydm92NXR0NmxsIn0.-pBP1vx01qdBL4yInmecBA'
// 				onViewportChange={(newViewport) => setViewport(newViewport)}
// 				mapStyle='mapbox://styles/mapbox/streets-v11' // You can change the map style here
// 			>
// 				{/* Example Marker */}
// 				<Marker
// 					latitude={37.7749}
// 					longitude={-122.4194}
// 					offsetLeft={-20}
// 					offsetTop={-10}>
// 					<div>Marker</div>
// 				</Marker>
// 			</ReactMapGL>
// 		</>
// 	)
// }

// export default Map


















import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AkRfb75WTat5KTJVX5QtJvNJKW7fPr6EGVMkTPLSTrot0fD6mzW3BMpVh1tkkjWN"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)















// import React, { useEffect, useState, useRef } from 'react'
// import styles from './index.module.css'

// const Map = () => {
// 	const mapContainerRef = useRef(null)
// 	const [map, setMap] = useState(null)
// 	const [address, setAddress] = useState('')
// 	const [coordinates, setCoordinates] = useState(null)

//   useEffect(() => {
//     const loadMapScript = () => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.defer = true;
//       script.src = `https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=AkRfb75WTat5KTJVX5QtJvNJKW7fPr6EGVMkTPLSTrot0fD6mzW3BMpVh1tkkjWN`

//       // Ensure the initMap function is defined before the script is loaded
//       window.initMap = () => {};

//       document.head.appendChild(script);
//     };

//     const initMap = () => {
//       const newMap = new window.Microsoft.Maps.Map(mapContainerRef.current, {
//         zoom: 13,
//       });

//       setMap(newMap);
//     };

//     loadMapScript();

//     const checkMapsAvailability = () => {
//       if (window.Microsoft && window.Microsoft.Maps) {
//         initMap();
//       } else {
//         setTimeout(checkMapsAvailability, 100);
//       }
//     };

//     checkMapsAvailability();
//   }, []);
// 	useEffect(() => {
// 		if (map && coordinates) {
// 			map.entities.clear()
// 			const pushpin = new window.Microsoft.Maps.Pushpin(coordinates)
// 			map.entities.push(pushpin)
// 		}
// 	}, [map, coordinates])

// 	const findAddress = async () => {
// 		try {
// 			const response = await callGeocodingAPI(address)
// 			const apiCoordinates = response.results[0]?.locations[0]?.displayPosition

// 			if (apiCoordinates) {
// 				setCoordinates(
// 					new window.Microsoft.Maps.Location(
// 						apiCoordinates.latitude,
// 						apiCoordinates.longitude
// 					)
// 				)
// 			} else {
// 				console.error('Coordinates not found for the given address.')
// 			}
// 		} catch (error) {
// 			console.error('Error calling geocoding API:', error)
// 		}
// 	}

// 	const callGeocodingAPI = async (inputAddress) => {
// 		const apiKey =
// 			'AkRfb75WTat5KTJVX5QtJvNJKW7fPr6EGVMkTPLSTrot0fD6mzW3BMpVh1tkkjWN'
// 		const apiUrl = `https://geocoding-api-url.com?address=${encodeURIComponent(
// 			inputAddress
// 		)}&key=${apiKey}`

// 		const response = await fetch(apiUrl)
// 		const data = await response.json()
// 		console.log(data)
// 		console.log(response)
// 		return data
// 	}

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.searchBox}>
// 				<input
// 					placeholder='آدرس ...'
// 					value={address}
// 					onChange={(e) => setAddress(e.target.value)}
// 				/>
// 				<button onClick={findAddress}>جستجو</button>
// 			</div>
// 			<div
// 				className={styles.map}
// 				ref={mapContainerRef}></div>
// 		</div>
// 	)
// }

// export default Map
