import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '70vh'
};

const center = {
  lat: -22.36547194149674,
  lng: -46.94303070225753
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBhbEXhbkeKjLuTctO_qscFo1WWSAmmjmw"
  })

  const [map, setMap] = React.useState(null)


  return isLoaded ? (
    <div className='text-4xl sm:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>
      <h1 className='p-2'>Vem Para Rubi</h1>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}   
      >
          <Marker position={ center } />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(SimpleMap)