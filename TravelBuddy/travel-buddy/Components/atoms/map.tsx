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
            // setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}>



          {state.map((attraction, i) => {
            return(
            <BoxMarker
            image={attraction?.photo?.images.small?.url}
            key={i}
            name={attraction.name}
            lat={Number(attraction.latitude)}
            lng={Number(attraction.longitude)}
            rating={Number(attraction.rating)}
            numReviews={Number(attraction.num_reviews)}
            />
            )
          })}


        </GoogleMapReact>

      </Box>

  )


}