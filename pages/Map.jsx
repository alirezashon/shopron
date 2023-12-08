// pages/index.js

import { useEffect, useState } from 'react';

const MapPage = () => {
  const [mapImage, setMapImage] = useState(null);
  const apiKey = 'web.d1a83360ece64abe93285bbddade580f'; // Replace with your actual API key
  const apiUrl = `https://api.neshan.org/v4/static?type=neshan&width=500&height=500&zoom=12&center=32.657307%2C51.677579&markerToken=101139.nRmybq5`;

  useEffect(() => {
    const fetchMapImage = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Key': apiKey,
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setMapImage(imageUrl);
        } else {
          console.error('Failed to fetch map image');
        }
      } catch (error) {
        console.error('Error fetching map image:', error);
      }
    };

    fetchMapImage();
  }, [apiKey, apiUrl]);

  return (
    <div>
      {mapImage && <img src={mapImage} alt="Neshan Map" />}
    </div>
  );
};

export default MapPage;

// import Map from '../Components/Map'

// const MapManager = () => {
//     return (
//         <>
//             <Map/>
//         </>
//    )
// }
// export default MapManager