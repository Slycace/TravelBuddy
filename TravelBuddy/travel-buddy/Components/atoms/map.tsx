import React,{useState, useEffect, useContext, useRef} from 'react';
import GoogleMapReact
from 'google-map-react';
import { Polyline } from '@react-google-maps/api';
import { Box } from '@chakra-ui/react';
import BoxMarker from './boxmarker';
import { BoundsContext, CoordinatesContext, Context, CitiesContext } from '../GlobalState';

export default function Map() {
  const [cities, setCities] = useContext(CitiesContext);
  const [state, setState] = useContext(Context);
  const [bounds, setBounds] = useContext(BoundsContext);
  let mapRef = useRef();
  const [coordinates, setCoordinates] = useContext(CoordinatesContext);
      let defaultProps = {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
        zoom: 10
      }

      let polyLineCoordinates = [
        { lat: 37.7749, lng: -122.4194},
        { lat: coordinates.lat, lng: coordinates.lng},

      ]


      const handleApiLoaded = (map, maps) => {
        mapRef.current = map;
        const newMap = new google.maps.Polyline({
          path:polyLineCoordinates,
          strokeColor: "blue",
          strokeOpacity: 0.8,
          strokeWeight: 2,
        });
        newMap.setMap(map);
      }

      useEffect(() => {
        const newMap = new google.maps.Polyline({
          path:polyLineCoordinates,
          strokeColor: "blue",
          strokeOpacity: 0.8,
          strokeWeight: 2,
        });
        newMap.setMap(mapRef.current);
      },[coordinates])


  return (
      <Box w={'100%'} h={'100%'}>
        <GoogleMapReact
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
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
            image={attraction?.photo?.images.small?.url || 'no-image.jpg'}
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