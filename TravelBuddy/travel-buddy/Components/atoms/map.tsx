import React from 'react';
import { GoogleMap, Marker, InfoBox } from '@react-google-maps/api';
import { Box } from '@chakra-ui/react';
import BoxMarker from './boxmarker';

export default function Map() {

  return (

      <GoogleMap
        mapContainerStyle={{width:'inherit',
      height: 'inherit'}}
        center={{lat:35.6762,
        lng:139.6503,}}
        zoom={10}
      >
          <InfoBox
          position={{lat:35.6762,
            lng:139.6503,}}>
              <BoxMarker/>
          </InfoBox>
        <></>
      </GoogleMap>

  )


}