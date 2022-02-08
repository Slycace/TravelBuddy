import React from "react";
import { HStack, VStack, Box, Spacer, Flex } from "@chakra-ui/react";
import Navbar from "../organisms/navbar";
import CitiesAndPlaces from "../organisms/citiesandplaces";
import Map from "../atoms/map";
import AreaSearch from "../molecules/areasearch";
import ScrollList from "../organisms/scrollList";

export default function PlannerTemplate() {

  return(
      <Flex className="mainDiv" direction={'column'} >
        <Box className="navDiv" h={50} borderWidth={1} borderColor={'blue'} >
            <Navbar/>
        </Box>
        <Flex className="plannerDiv"
        direction={'row'}
        borderWidth={1}
        borderColor={'blue'} h={'90vh'}>
          <Flex direction={'column'} width={'25vw'} borderColor={'blue'} borderWidth={1} >
            <Flex direction={'column'} h={'25%'} borderWidth={1} borderColor={'blue'}>
             <AreaSearch/>
            </Flex>
            <Flex direction={'column'} h={'75%'} borderWidth={1} borderColor={'blue'}>
              <ScrollList/>
            </Flex>
          </Flex>
          <Flex direction={'column'} width={'75vw'} borderColor={'blue'} borderWidth={1} >
            <Flex direction={'column'} h={'10%'} borderColor={'blue'}
            borderWidth={'1px'}>
             <CitiesAndPlaces/>
            </Flex>
            <Flex direction={'column'} h={'90%'} borderColor={'blue'}
            borderWidth={'1px'}>
             <Map/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

  )
}