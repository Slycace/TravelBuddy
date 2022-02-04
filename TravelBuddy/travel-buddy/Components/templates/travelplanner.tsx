import React from "react";
import { HStack, VStack, Box, Spacer } from "@chakra-ui/react";
import Navbar from "../organisms/navbar";
import CitiesAndPlaces from "../organisms/citiesandplaces";

export default function PlannerTemplate() {

  return(
    <VStack className="windowDiv">
    <Box height={50} borderWidth={1} borderColor={'blue'} w={'100vw'} className="navDiv">
      <Navbar/>
    </Box>
    <HStack className="sidebarandMaps Div"
    borderWidth={1}
    borderColor={'blue'}
    h={'90vh'}
    w={'100vw'}
    direction={'row'}
    >
    <VStack className="sideBarDiv" borderWidth={1} borderColor={'blue'} h={'90vh'} w={'30vw'}>

    </VStack>
    <VStack className="mapCitiesLocationsDiv" borderWidth={1} borderColor={'blue'} h={'90vh'} w={'70vw'}>
      <HStack borderWidth={1} borderColor={'blue'} w={'inherit'} h={50}>
          <CitiesAndPlaces/>
      </HStack>

    </VStack>
    </HStack>
    </VStack>

  )
}