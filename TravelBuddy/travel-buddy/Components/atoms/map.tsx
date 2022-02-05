import React, { useRef, MutableRefObject, useEffect} from 'react';
import { Box } from '@chakra-ui/react'


export default function TravlerMap() {

  let inputElement:MutableRefObject<HTMLInputElement| null | any> = useRef(null);
  useEffect(() => {
    let map: google.maps.Map = new google.maps.Map(document.getElementById('travelerMap') as HTMLElement, {
      center: { lat: -34, lng: 150},
      zoom: 10,
    })
  })

  return(
    <Box id='travelerMap' w={'inherit'} h={'inherit'} ref={inputElement}>
        testing
    </Box>

  )
}