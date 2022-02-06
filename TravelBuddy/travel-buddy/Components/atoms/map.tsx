import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@chakra-ui/react';
import BoxMarker from './boxmarker';

export default function Map() {
      const defaultProps = {
        center: {
          lat:35.6762,
          lng:139.6503
        },
        zoom: 10

      }


  return (
      <Box w={'inherit'} h={'inherit'}>
        <GoogleMapReact
        bootstrapURLKeys={ {key: process.env.GOOGLE_API_KEY}}
        defaultCenter={defaultProps.center}
        zoom={defaultProps.zoom}>
            <Box lat={35.6762} lng={139.6503} onClick={(e ) => (console.log('hey'))}>
              testing
            </Box>

        </GoogleMapReact>

      </Box>

  )


}