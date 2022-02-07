import React,{useState, useEffect, useContext} from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@chakra-ui/react';
import BoxMarker from './boxmarker';
import { BoundsContext, CoordinatesContext, Context } from '../GlobalState';

export default function Map() {
  const [state, setState] = useContext(Context);
  const [bounds, setBounds] = useContext(BoundsContext);
  const [coordinates, setCoordinates] = useContext(CoordinatesContext);
      let defaultProps = {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
        zoom: 10
      }




  return (
      <Box w={'inherit'} h={'inherit'}>
        <GoogleMapReact
        defaultCenter={coordinates}
        center={coordinates}
        zoom={defaultProps.zoom}
        onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}>

            <Box lat={35.6762} lng={139.6503} onClick={(e ) => (console.log('hey'))}>
              testing
            </Box>

            {state?.map((place) => (
              <Box
              backgroundColor={'white'}
              w={50}
              h={50}
              key={Number(place.name)}
              lat={Number(place.latitude)} lng={place.longitude}>
                    {place.name}
              </Box>
            ))}

        </GoogleMapReact>

      </Box>

  )


}